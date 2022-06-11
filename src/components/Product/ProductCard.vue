<template>
  <div class="col-12 col-sm-6 col-md-12 col-xl-6">
    <div class="single-product-wrapper">
      <!-- Product Image -->
      <div class="product-img">
        <img src="@/assets/images/product-img/product1.jpg" alt="" />
      </div>

      <!-- Product Description -->
      <div class="product-description d-flex align-items-center justify-content-between">
        <!-- Product Meta Data -->
        <div class="product-meta-data">
          <div class="line"></div>
          <p class="product-price">{{ product.price }} $</p>
          <router-link :to="{ name: 'product', params: { product_id: product.id } }">
            <h6>{{ product.name }}</h6>
          </router-link>
        </div>
        <!-- Ratings & Cart -->
        <div class="ratings-cart text-right">
          <div class="cart">
            <button
              class="btn btn-link"
              data-toggle="tooltip"
              data-placement="left"
              @click.prevent="addToCart"
              title="Add to cart"
            >
              <i class="icon las la-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Product } from "@/types/Products";

export default Vue.extend({
  name: "ProductCard",
  props: {
    product: {
      type: Object as PropType<Product>,
      default: () => ({}),
    },
  },
  methods: {
    addToCart() {
      const product = {
        id: this.product.id,
        quantity: 1,
      };
      this.$store.dispatch("cart/addToCart", product);
    },
  },
});
</script>
