import { Action, Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Product, ProductSearchOptions } from "@/types/Products";
import { LoadStatuses } from "@/enums/LoadStatuses";
import maxBy from "lodash/maxBy";
import ProductsApi from "@/services/products";

type PaginationType = {
  page: number;
  totalPages: number;
};

@Module({
  namespaced: true,
})
export default class ProductsModule extends VuexModule {
  public products: Product[] = [];
  public product: Product = null;

  public productsLoadStatus: LoadStatuses = null;
  public productLoadStatus: LoadStatuses = null;

  public priceRange: [number, number] = [0, 100];

  get getProducts() {
    return this.products.filter((product) => {
      const [minPrice, maxPrice] = this.priceRange;
      return product.price >= minPrice && product.price <= maxPrice;
    });
  }

  @Action
  public fetchProducts(payload: ProductSearchOptions): Promise<void> {
    this.context.commit("setProductsLoadStatus", LoadStatuses.FETCHING);

    return ProductsApi.getProducts(payload)
      .then(({ data }) => {
        if (!data.length) {
          return;
        }
        this.context.commit("setProducts", data);
        this.context.commit("setProductsLoadStatus", LoadStatuses.LOADED);

        const maxPrice = Number(maxBy(data, "price").price);
        this.context.commit("setPriceRange", [0, maxPrice]);
      })
      .catch(() => {
        this.context.commit("setProductsLoadStatus", LoadStatuses.FAILED);
      });
  }

  @Action
  public fetchProductBySlug(slug: string): Promise<void> {
    this.context.commit("setProductLoadStatus", LoadStatuses.FETCHING);

    return ProductsApi.getProductBySlug(slug)
      .then(({ data }) => {
        if (Array.isArray(data)) {
          this.context.commit("setProductLoadStatus", LoadStatuses.FAILED);
          return;
        }

        this.context.commit("setProductLoadStatus", LoadStatuses.LOADED);
        this.context.commit("setProduct", data);
      })
      .catch(() => {
        this.context.commit("setProductLoadStatus", LoadStatuses.FAILED);
      });
  }

  @Mutation
  public setProducts(products: Product[]): void {
    this.products = products;
  }

  @Mutation
  public setProduct(product: Product): void {
    this.product = product;
  }

  @Mutation
  public setPriceRange(priceRange: [number, number]): void {
    this.priceRange = [...priceRange];
  }

  @Mutation
  public setProductsLoadStatus(value: LoadStatuses): void {
    this.productsLoadStatus = value;
  }

  @Mutation
  public setProductLoadStatus(value: LoadStatuses): void {
    this.productLoadStatus = value;
  }
}
