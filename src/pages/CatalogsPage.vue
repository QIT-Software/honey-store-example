<template>
  <div style="display: contents">
    <ProductList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import ProductList from "../components/product/ProductList.vue";
import { ProductSearchOptions } from "@/types/Products";

export default Vue.extend({
  name: "CatalogsPage",
  components: {
    ProductList,
  },
  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
      fetchCatalog: "catalogs/fetchCatalog",
    }),

    fetchData() {
      const searchOptions: ProductSearchOptions = {};

      if (this.$route.params.slug) {
        searchOptions.catalog = this.$route.params.slug;

        this.fetchCatalog(this.$route.params.slug).catch(() => {
          this.$router.push({ name: "404" });
        });
      }
      if (this.$route.params.search) {
        searchOptions.search = this.$route.params.search;
      }

      this.fetchProducts(searchOptions);
    },
  },

  watch: {
    $route: "fetchData",
  },

  created() {
    this.fetchData();
  },
});
</script>
