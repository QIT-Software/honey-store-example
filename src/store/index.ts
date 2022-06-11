import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import catalogs from "./modules/catalogs";
import products from "./modules/products";
import VuexPersist from "vuex-persist";
import createMutationsSharer from "vuex-shared-mutations";

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  key: "honey-store-cart",
  storage: window.localStorage,
  reducer: (state: any) => ({ cart: state.cart }),
});

export default new Vuex.Store({
  plugins: [
    vuexLocal.plugin,
    createMutationsSharer({
      predicate: [
        "cart/addToCart",
        "cart/setCartItems",
        "cart/addOneToCart",
        "cart/clearCart",
        "cart/removeOneFromCart",
      ],
    }),
  ],
  modules: {
    cart,
    products,
    catalogs,
  },
  strict: process.env.NODE_ENV !== "production",
});
