<template>
  <div class="catalog-item-page container-fluid mt-4">
    <div class="row">
      <div class="col-12 col-sm-6 d-flex justify-content-center">
        <div class="card w-73">
          <img
            class="img-fluid card-img-top"
            :src="'http://tajhoney.loc/assets/images/products/' + product.image"
            alt="Картинка товара"
          />
        </div>
      </div>
      <div class="col-12 col-sm-6 text-left">
        <div class="row">
          <h2 class="mt-4 ml-sm-4">
            {{ product.name }}
          </h2>
          <p class="ml-sm-4">{{ product.description }}</p>
          <br />
          <h4 class="ml-sm-4">
            <span>{{ product.price }} c.</span>
            <button class="btn btn-warning ml-4" @click="addToCart(product)">
              Добавить в корзину<i class="fa fa-shopping-cart ml-2" style="color: #525252"></i>
            </button>
          </h4>
          <div class="col-3 my-auto qty">
            <div class="input-group input-group-xs">
              <div class="input-group-prepend">
                <button class="btn btn-outline-warning" @click="qty--">-</button>
              </div>
              <input type="text" class="form-control text-center" :value="qty" id="qty" />
              <div class="input-group-append">
                <button class="btn btn-outline-warning" @click="qty++">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "product",
  props: ["slug"],
  data() {
    return {
      qty: 1,
    };
  },
  computed: {
    ...mapGetters({
      getProductBySlug: "products/getProductBySlug",
    }),
    product() {
      return this.getProductBySlug(this.slug);
    },
  },
  methods: {
    ...mapActions({
      addProductToCart: "cart/addToCart",
      getProduct: "products/getProductBySlug",
    }),
    addToCart() {
      let item = {
        id: this.product.id,
        stock: this.product.stock,
        qty: this.qty,
      };
      this.addProductToCart({ ...item });
    },
  },

  created() {
    this.getProduct(this.slug);
  },
};
</script>

<style>
.catalog-item-page img {
  max-height: 25em;
  width: 20em;
}

.catalog-item-page input,
.catalog-item-page textarea {
  background-color: transparent;
  color: #fff;
  border: 1px solid #525252;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 18px;
  position: absolute;
}
.feedback form {
  margin-bottom: 2em;
}
@media (min-width: 992px) {
  #itemInfo {
    width: 25em;
  }
}
</style>
