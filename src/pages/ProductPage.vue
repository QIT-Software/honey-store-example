<template>
  <div class="content-wrapper">
    <TheLoader v-if="productLoadStatus === LoadStatuses.FETCHING" />
    <!-- Product Details Area Start -->
    <div v-else-if="productLoadStatus === LoadStatuses.LOADED" class="single-product-area section-padding-100 clearfix">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-7 mt-5 mt-xl-0 mb-30">
            <div class="single_product_thumb">
              <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <a class="gallery_img" href="@/assets/images/product-img/product1.jpg">
                      <img class="d-block w-100" src="@/assets/images/product-img/product1.jpg" alt="First slide" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="single_product_desc">
              <!-- Product Meta Data -->
              <div class="product-meta-data">
                <div class="line"></div>
                <p class="product-price">{{ product.price }} $.</p>
                <a href="product-details.html">
                  <h6>{{ product.name }}</h6>
                </a>
                <!-- Avaiable -->
                <p class="avaibility"><i class="las la-square-full"></i> In stock</p>
              </div>

              <div class="short_overview my-5">
                <p>{{ product.description }}</p>
              </div>

              <!-- Add to Cart Form -->
              <form class="cart clearfix" @submit.prevent>
                <div class="cart-btn d-flex mb-50">
                  <p>Quantity</p>
                  <div class="quantity">
                    <span class="qty-minus" @click="handleMinusQuantity"
                      ><i class="las la-caret-down" aria-hidden="true"></i
                    ></span>
                    <input type="number" class="qty-text" name="quantity" readonly="readonly" :value="quantity" />
                    <span class="qty-plus" @click="quantity++"><i class="las la-caret-up" aria-hidden="true"></i></span>
                  </div>
                </div>
                <button type="submit" name="addtocart" value="5" class="btn amado-btn" @click="addToCart">
                  Add to cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Details Area End -->
    <NotFound v-else></NotFound>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import NotFound from "../components/Main/NotFound.vue";
import TheLoader from "../components/Main/TheLoader.vue";
import { LoadStatuses } from "@/enums/LoadStatuses";

export default Vue.extend({
  name: "ProductPage",
  components: {
    NotFound,
    TheLoader,
  },
  data() {
    return {
      quantity: 1,
      LoadStatuses,
    };
  },
  watch: {
    $route: "fetchProduct",
  },
  computed: {
    ...mapState("products", ["productLoadStatus", "product"]),
  },
  methods: {
    ...mapActions({
      fetchProductById: "products/fetchProductById",
      addProductToCart: "cart/addToCart",
    }),
    handleMinusQuantity() {
      if (this.quantity === 1) {
        return;
      }

      this.quantity -= 1;
    },

    fetchProduct() {
      this.fetchProductById(Number(this.$route.params.product_id));
    },

    addToCart() {
      const product = {
        id: this.product.id,
        quantity: this.qty,
      };
      this.addProductToCart({ ...product });
    },
  },
  mounted() {
    this.fetchProduct();
  },
});
</script>

<style scoped>
.content-wrapper {
  display: contents;
}
</style>
