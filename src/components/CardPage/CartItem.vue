<template>
  <tr>
    <td class="cart_product_img">
      <router-link :to="{ name: 'product', params: { product_id: item.id } }">
        <img src="@/assets/images/product-img/product1.jpg" :alt="item.name" />
      </router-link>
    </td>
    <td class="cart_product_desc">
      <h5>{{ item.name }}</h5>
    </td>
    <td class="price">
      <span>{{ item.price }} $.</span>
    </td>
    <td class="qty">
      <div class="qty-btn d-flex">
        <div class="quantity">
          <span class="qty-minus" @click="removeOne()">
            <i class="las la-minus" aria-hidden="true"></i>
          </span>
          <input type="number" class="qty-text" readonly="readonly" :value="item.quantity" />
          <span class="qty-plus" @click="addOne()">
            <i class="las la-plus" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { mapMutations } from "vuex";
import { CartItem } from "@/services/products";

export default Vue.extend({
  name: "CartItem",
  props: {
    item: {
      type: Object as PropType<CartItem>,
      default: () => ({}),
    },
  },
  methods: {
    ...mapMutations({
      addOneToCart: "cart/addOneToCart",
      removeOneFromCart: "cart/removeOneFromCart",
    }),
    addOne() {
      this.addOneToCart(this.item.id);
    },
    removeOne() {
      this.removeOneFromCart(this.item.id);
    },
  },
});
</script>
