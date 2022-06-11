<template>
  <div style="display: contents">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "../components/product/ProductList";

import { mapActions } from "vuex";

export default {
  name: "Catalog",
  components: {
    ProductList,
  },

  methods: {
    ...mapActions({
      loadProducts: "products/loadProducts",
      loadCatalog: "catalogs/loadCatalog",
    }),

    fetchData() {
      let params = [];

      if (this.$route.params.slug) {
        params.push({
          catalog: this.$route.params.slug,
        });

        this.loadCatalog(this.$route.params.slug).catch(() => {
          this.$router.push({ name: "404" });
        });
      }
      if (this.$route.params.search) {
        params.push({
          search: this.$route.params.search,
        });
      }

      this.loadProducts(...params);
    },
  },

  watch: {
    $route: "fetchData",
  },

  created() {
    this.fetchData();
  },
};
</script>
