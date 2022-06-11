<template>
  <div style="display: contents">
    <theSidebar @setRange="setRange" :range="range" />
    <div class="amado_product_area section-padding-100">
      <div class="container-fluid">
        <div class="row">
          <!-- Single Product Area -->
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="col-12 col-sm-6 col-md-12 col-xl-6"
          >
            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="@/assets/images/product-img/product1.jpg" alt="" />
              </div>

              <!-- Product Description -->
              <div
                class="product-description d-flex align-items-center justify-content-between"
              >
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                  <div class="line"></div>
                  <p class="product-price">{{ product.price }}</p>
                  <router-link
                    :to="{ name: 'product', params: { slug: product.slug } }"
                  >
                    <h6>{{ product.name }}</h6>
                  </router-link>
                </div>
                <!-- Ratings & Cart -->
                <div class="ratings-cart text-right">
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="cart">
                    <a
                      href="cart.html"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Добавить в корзину"
                      ><img src="@/assets/images/core-img/cart.png" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button @click="loadMore()">
            {{ isLoading ? "Загрузка ..." : "Ещё" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import InfiniteLoading from 'vue-infinite-loading';
import theSidebar from "../main/TheSidebar";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "catalog",
  components: {
    theSidebar,
  },
  data() {
    return {
      sortedProducts: [],
      sortUp: false,
      range: [0, 250],
      catalog: {},
      isLoading: 0,
    };
  },

  computed: {
    ...mapGetters({
      cartTotalPrice: "cart/cartTotalPrice",
      allProducts: "products/allProducts",
      getCatalogBySlug: "products/getCatalogBySlug",
    }),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.allProducts;
      }
    },
  },
  methods: {
    ...mapActions({
      getProducts: "products/getProducts",
      getCatalogs: "products/getCatalogs",
    }),
    setRange(rangeValue) {
      this.range = rangeValue;
      this.sortByPrice();
    },
    sortByPrice() {
      // let catalogId = this.getCatalogBySlug(this.$route.params.slug)
      let vm = this;
      this.sortedProducts = [...this.allProducts];
      this.sortedProducts = this.sortedProducts.filter((item) => {
        return item.price >= vm.range[0] && item.price <= vm.range[1];
      });
    },
    getProductByCategory() {
      this.catalog = this.getCatalogBySlug(this.$route.slug);
      this.sortedProducts = [...this.allProducts];
      this.sortedProducts = this.sortedProducts.filter(
        (item) => item.catalogs() === this.catalog.id
      );
    },
    loadMore() {
      this.isLoading = 1;
      this.getProducts().then((this.isLoading = 0));
    },
  },
  created() {
    this.getProducts();
    this.sortByPrice();
  },
};
</script>
