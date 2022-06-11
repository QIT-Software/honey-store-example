import axios, { AxiosResponse } from "axios";
import { ProductSearchOptions } from "@/types/Products";
import { mockCatalogs, mockProducts } from "@/constants/MockedData";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type CheckoutOrderForm = {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  product: string;
};

export type CheckoutOrder = CheckoutOrderForm & { products: CartItem[] };

const doesNameIncludesKeyword = (productName: string, keyword: string): boolean => {
  return productName.trim().toLowerCase().includes(keyword.trim().toLowerCase());
};

const mockProductsResponse = (searchOptions: ProductSearchOptions) =>
  new Promise((resolve) => {
    let products = [];

    const { catalog, search } = searchOptions;

    if (!catalog && !search) {
      products = [...mockProducts];
    }

    if (search && catalog) {
      const catalogId = mockCatalogs.find((catalogItem) => catalogItem.slug === catalog).id;
      products = mockProducts.filter(
        (product) => product.catalog_id === catalogId && doesNameIncludesKeyword(product.name, search)
      );
    }

    if (search && !catalog) {
      products = mockProducts.filter((product) => doesNameIncludesKeyword(product.name, search));
    }

    if (catalog && !search) {
      const catalogId = mockCatalogs.find((catalogItem) => catalogItem.slug === catalog).id;
      products = mockProducts.filter((product) => product.catalog_id === catalogId);
    }

    setTimeout(() => {
      resolve({ data: products });
    }, 150);
  });

export default {
  getProducts(options: ProductSearchOptions = {}) {
    return mockProductsResponse(options);
  },

  getProductBySlug(slug: string) {
    return axios.get(`products/${slug}`).then(({ data }) => data);
  },

  checkout(order: CheckoutOrder): Promise<AxiosResponse> {
    return axios.post("checkout", order).then(({ data }) => data);
  },
};
