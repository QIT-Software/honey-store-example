<template>
  <div style="display: contents">
    <TheSidebar />

    <TheLoader v-if="productsLoadStatus === LoadStatuses.FETCHING" class="loader" />

    <div class="amado_product_area section-padding-100">
      <div class="container-fluid">
        <div class="row" v-if="productsLoadStatus === LoadStatuses.LOADED">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>

        <div v-else-if="productsLoadStatus === LoadStatuses.FAILED" class="m-auto p-1 alert-warning text-center">
          <h3>There is nothing, but probably will appear later! <strong>:)</strong></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import TheLoader from "../main/TheLoader.vue";
import TheSidebar from "../main/TheSidebar.vue";
import ProductCard from "./ProductCard.vue";
import { LoadStatuses } from "@/enums/LoadStatuses";

export default Vue.extend({
  name: "ProductList",
  components: {
    TheLoader,
    TheSidebar,
    ProductCard,
  },
  data() {
    return {
      LoadStatuses,
    };
  },
  computed: {
    ...mapGetters({
      products: "products/getProducts",
      productsLoadStatus: "products/getProductsLoadStatus",
    }),
  },
});
</script>
