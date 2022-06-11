<template>
  <div style="display: contents">
    <ProductList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import ProductList from "../components/product/ProductList.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    ProductList,
  },
  methods: {
    ...mapActions({
      loadProducts: "products/loadProducts",
    }),
  },
  created() {
    this.loadProducts();
  },
});
</script>
