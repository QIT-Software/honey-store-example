<template>
  <div class="cart">
    <div class="container-fluid" v-if="products.length">
      <div class="row cart-top pt-1 pb-1 mt-5 ml-2 mr-2">
        <div class="col-5">Название товара</div>
        <div class="col-2">Цена</div>
        <div class="col-2">Количество</div>
        <div class="col-2">Всего</div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <cart-item v-for="item in products" :key="item.name" :item="item" />
      </div>
      <div class="row ml-2 mr-2">
        <div class="col-12 mt-3">
          <div class="pull-right cart_price">
            <span>Общая цена: {{ totalPrice }} c.</span>
            <br />
            <router-link :to="{ name: 'checkout' }">
              <button class="btn btn-override-light bg-warning mt-2">Оформить заказ</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5" v-else>
      <h2>Нету предметов в корзине</h2>
    </div>
  </div>
</template>

<script>
import cartItem from "./CartItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartPage",
  components: {
    cartItem,
  },
  computed: {
    ...mapGetters({
      products: "cart/cartProducts",
      totalPrice: "cart/cartTotalPrice",
    }),
  },
  methods: {
    ...mapActions({
      getAllProducts: "products/getAllProducts",
    }),
  },

  mounted() {
    this.getAllProducts();
  },
};
</script>

<style>
.cart-top {
  background-color: #525252;
}
.cart_price {
  margin: 1em 0 0 0;
  padding: 1em 0.5em 1em 0.5em;
  background-color: #2f2f2f;
}
</style>
