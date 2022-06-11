<template>
  <div class="cart-table-area section-padding-100" v-if="items.length">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="cart-title mt-50">
            <h2>My Cart</h2>
          </div>

          <div class="cart-table clearfix">
            <table class="table table-responsive">
              <thead>
                <tr>
                  <th></th>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <CartItem class="qty" v-for="item in items" :key="item.id" :item="item" />
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="cart-summary">
            <h5>Summary</h5>
            <ul class="summary-table">
              <li>
                <span>Subtotal:</span> <span>{{ totalPrice }}$</span>
              </li>
              <li><span>Delivery:</span> <span>Free</span></li>
              <li>
                <span>Total:</span> <span>{{ totalPrice }}$</span>
              </li>
            </ul>
            <div class="cart-btn mt-100">
              <router-link :to="{ name: 'checkout' }" class="btn amado-btn w-100">Checkout</router-link>
              <span class="btn btn-link text-dark w-100 mt-3" @click="clearCart">Clear cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <NotFound v-else>Your cart is empty :(</NotFound>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import CartItem from "../components/CardPage/CartItem.vue";
import NotFound from "../components/Main/NotFound.vue";

export default Vue.extend({
  name: "CartPage",
  components: {
    CartItem,
    NotFound,
  },
  computed: {
    ...mapGetters({
      items: "cart/getItems",
      products: "products/getProducts",
      totalPrice: "cart/cartTotalPrice",
    }),
  },
  methods: {
    ...mapMutations({
      clearCart: "cart/clearCart",
    }),
    ...mapActions({
      fetchProducts: "products/fetchProducts",
    }),
  },

  mounted() {
    this.fetchProducts();
  },
});
</script>

<style scoped>
.error__image {
  width: 30%;
  position: relative;
}
a {
  font-size: 1rem;
}

a:hover,
:focus {
  font-size: 1rem;
}
</style>
