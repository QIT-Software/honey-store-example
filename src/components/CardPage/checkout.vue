<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-lg-8 col-12">
        <div class="checkout-form">
          <h2>Сделайте Ваш заказ</h2>
          <!-- Form -->
          <form class="form" method="post" action="#">
            <div class="row mt-4">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label>Имя<span>*</span></label>
                  <input type="text" name="name" placeholder="" required="required" v-model="firstName" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label>Фамилия<span>*</span></label>
                  <input type="text" name="name" placeholder="" required="required" v-model="lastName" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label>Номер телефона<span>*</span></label>
                  <input type="number" name="number" placeholder="" required="required" v-model="phone" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label>Город<span>*</span></label>
                  <select name="state-province" id="state-province" v-model="city">
                    <option value="divition" selected="selected">Душанбе</option>
                    <option>Худжанд</option>
                    <option>Гафуров</option>
                    <option>Бустон</option>
                    <option>Исфара</option>
                    <option>Конибодом</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="form-group">
                  <label>Адрес<span>*</span></label>
                  <input type="text" name="address" placeholder="" required="required" v-model="address" />
                </div>
              </div>
            </div>
          </form>
          <!--/ End Form -->
        </div>
      </div>
      <div class="col-lg-4 col-12">
        <div class="order-details">
          <!-- Order Widget -->
          <div class="single-widget">
            <h2>Сумма заказа</h2>
            <span
              >Стоимость:<span style="color: #ffff06"> {{ cartTotalPrice }}c.</span></span
            >
          </div>
          <!--/ End Order Widget -->
          <!-- Order Widget -->
          <div class="single-widget">
            <h2>Способы оплаты</h2>
            <div class="content">
              <div class="checkbox">
                <input name="news" id="2" type="radio" /> Наличкой <br />
                <input name="news" id="3" type="radio" /> Оплата картой <br />
              </div>
            </div>
          </div>
          <!--/ End Order Widget -->
          <!-- Button Widget -->

          <button class="btn btn-warning mt-4" @click="checkoutOrder()">Продолжить заказ</button>

          <div
            class="modal fade bd-proceed-modal-sm"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mySmallModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-sm">
              <div class="modal-content">
                <h2>Спасибо за использование нашим магазином!</h2>
                <p class="mb-2">Ваш заказ будет обработан в ближайщее время!</p>
              </div>
            </div>
          </div>

          <!--/ End Button Widget -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "checkout",
  data() {
    return {
      lastName: "",
      firstName: "",
      phone: "",
      city: null,
      address: "",
    };
  },
  computed: {
    ...mapGetters({
      cartTotalPrice: "cart/cartTotalPrice",
    }),
    ...mapState({
      cartItems: (state) => state.cart.items,
    }),
  },
  methods: {
    ...mapActions({
      checkout: "cart/checkout",
    }),

    checkoutOrder() {
      let order = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        city: this.city,
        address: this.address,
        product: this.cartItems,
      };
      this.checkout(order);
    },
  },
};
</script>

<style>
.checkout-form {
  border: 1px solid #525252;
  padding: 5px 0 5px 10px;
}
.checkout-form input,
.checkout-form select,
.checkout-form option {
  float: right;
  margin-right: 10px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #525252;
  border-radius: 5px;
  font-size: 18px;
}

#state-province {
  width: 41.6%;
}

.checkout-form option {
  background: #525252;
}
</style>
