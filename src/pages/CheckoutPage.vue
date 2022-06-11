<template>
  <div style="display: contents">
    <TheLoader v-if="productsLoadStatus === LoadStatuses.FETCHING" class="loader" />
    <div v-else-if="productsLoadStatus === LoadStatuses.LOADED" class="cart-table-area section-padding-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="checkout_details_area mt-50 clearfix">
              <div class="cart-title">
                <h2>Checkout</h2>
              </div>

              <form>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="first_name"
                      v-model="form.first_name"
                      placeholder="First name *"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="last_name"
                      v-model="form.last_name"
                      placeholder="Last name *"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <input
                      type="number"
                      class="form-control"
                      name="phone_number"
                      min="0"
                      placeholder="Phone number *"
                      v-model="form.phone_number"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <input
                      type="number"
                      class="form-control"
                      name="additional_phone_number"
                      min="0"
                      placeholder="Additional phone number"
                      v-model="form.additional_phone_number"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <input type="text" class="form-control" name="city" placeholder="City *" v-model="form.city" />
                  </div>
                  <div class="col-12 mb-3">
                    <input
                      type="text"
                      class="form-control mb-3"
                      name="address"
                      placeholder="Address *"
                      v-model="form.address"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <textarea
                      name="note"
                      class="form-control w-100"
                      id="note"
                      cols="30"
                      rows="10"
                      placeholder="You may place notes here :)"
                      v-model="form.note"
                    >
                    </textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="cart-summary">
              <h5>Order summary</h5>
              <ul class="summary-table">
                <li>
                  <span>Subtotal:</span> <span>{{ totalPrice }}$</span>
                </li>
                <li><span>Delivery:</span> <span>Free</span></li>
                <li>
                  <span>Total:</span> <span>{{ totalPrice }}$</span>
                </li>
              </ul>

              <div class="payment-method">
                <!-- Cash on delivery -->
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input type="checkbox" class="custom-control-input" id="cod" checked disabled />
                  <label class="custom-control-label" for="cod">Payment after receiving</label>
                </div>
              </div>

              <div class="cart-btn mt-100">
                <button class="btn amado-btn w-100" @click="createOrder">Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import TheLoader from "../components/Main/TheLoader.vue";
import { LoadStatuses } from "@/enums/LoadStatuses";

const defaultForm = {
  first_name: null,
  last_name: null,
  phone_number: null,
  additional_phone_number: null,
  city: null,
  address: null,
  note: null,
};

export default Vue.extend({
  name: "CheckoutPage",
  data() {
    return {
      LoadStatuses,
      form: {
        ...defaultForm,
      },
    };
  },
  components: {
    TheLoader,
  },
  computed: {
    ...mapState("products", ["productsLoadStatus"]),
    ...mapGetters({
      totalPrice: "cart/cartTotalPrice",
      products: "products/getProducts",
    }),
  },
  methods: {
    ...mapActions({
      loadProducts: "products/loadProducts",
      checkout: "cart/checkout",
    }),

    createOrder() {
      this.checkout({ ...this.form });
    },
  },
  mounted() {
    if (!this.products.length) {
      this.loadProducts();
    }
  },
});
</script>
