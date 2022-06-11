<template>
  <tr>
    <td class="cart_product_img">
      <router-link :to="{ name: 'product', params: { slug: item.slug } }">
        <img src="@/assets/images/product-img/product1.jpg" :alt="item.name" />
      </router-link>
    </td>
    <td class="cart_product_desc">
      <h5>{{ item.name }}</h5>
    </td>
    <td class="price">
      <span>{{ item.price }} с.</span>
    </td>
    <td class="qty">
      <div class="qty-btn d-flex">
        <div class="quantity">
          <span class="qty-minus" @click="removeOne()">
            <i class="las la-minus" aria-hidden="true"></i>
          </span>
          <input type="number" class="qty-text" readonly="readonly" :value="item.qty" />
          <span class="qty-plus" @click="addOne()">
            <i class="las la-plus" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "cart-item",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapMutations({
      addOneToCart: "cart/addOneToCart",
      removeOneFromCart: "cart/removeOneFromCart",
    }),
    addOne() {
      let item = {
        id: this.item.id,
        qty: this.item.qty,
      };
      this.addOneToCart(item);
    },
    removeOne() {
      this.removeOneFromCart(this.item);
    },
  },
};
</script>
