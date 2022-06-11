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
                <tr class="qty" is="cart-item" v-for="item in items" :key="item.id">
                  <td>{{ item.}}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="cart-summary">
            <h5>Итог покупки</h5>
            <ul class="summary-table">
              <li>
                <span>подытог:</span> <span>{{ totalPrice }}</span>
              </li>
              <li><span>доставка:</span> <span>бесплатно</span></li>
              <li>
                <span>итого:</span> <span>{{ totalPrice }}</span>
              </li>
            </ul>
            <div class="cart-btn mt-100">
              <router-link :to="{ name: 'checkout' }" class="btn amado-btn w-100">Оформить заказ</router-link>
              <span class="btn btn-link text-dark w-100 mt-3" @click="clearCart">Очистить корзину</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <not-found v-else>Ваша корзина пока пуста.</not-found>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import CartItem from "../components/CardPage/CartItem";
import NotFound from "../components/main/NotFound";

export default {
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
      loadProducts: "products/loadProducts",
    }),
  },

  mounted() {
    if (!this.products.length) {
      this.loadProducts();
    }
  },
};
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
