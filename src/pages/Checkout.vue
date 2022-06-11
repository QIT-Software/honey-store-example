<template>
    <div style="display: contents">
        <the-loader v-if="productsLoadStatus === 1" class="loader"></the-loader>
        <div v-else-if="productsLoadStatus === 2" class="cart-table-area section-padding-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="checkout_details_area mt-50 clearfix">

                            <div class="cart-title">
                                <h2>Оформление заказа</h2>
                            </div>

                            <form>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <input type="text" class="form-control" name="first_name" v-model="first_name" placeholder="Ваше имя *" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="text" class="form-control" name="last_name" v-model="last_name" placeholder="Ваша фамилия *" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="number" class="form-control" name="phone_number" min="0" placeholder="Ваш номер телефона *" v-model="phone_number">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="number" class="form-control" name="additional_phone_number" min="0" placeholder="Доп. номер телефона" v-model="additional_phone_number">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <input type="text" class="form-control" name="city" placeholder="Ваш город *" v-model="city">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <input type="text" class="form-control mb-3" name="address" placeholder="Ваш адрес *" v-model="address">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <textarea
                                                name="note"
                                                class="form-control w-100"
                                                id="note"
                                                cols="30"
                                                rows="10"
                                                placeholder="Здесь Вы можете оставить пожелание к заказу :)"
                                                v-model="note">
                                        </textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="cart-summary">
                            <h5>Итог покупки</h5>
                            <ul class="summary-table">
                                <li><span>подытог:</span> <span>{{ totalPrice }}</span></li>
                                <li><span>доставка:</span> <span>бесплатно</span></li>
                                <li><span>итого:</span> <span>{{ totalPrice }}</span></li>
                            </ul>

                            <div class="payment-method">
                                <!-- Cash on delivery -->
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="cod" checked disabled>
                                    <label class="custom-control-label" for="cod">Оплата при доставке</label>
                                </div>
                            </div>

                            <div class="cart-btn mt-100">
                                <button class="btn amado-btn w-100" @click="createOrder">Оформить заказ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import TheLoader from "../components/main/TheLoader";

    export default {
        name: "Checkout",
        data() {
            return {
                first_name: null,
                last_name: null,
                phone_number: null,
                additional_phone_number: null,
                city: null,
                address: null,
                note: null
            }
        },
        components: {
            TheLoader
        },
        computed: mapGetters({
            'totalPrice': 'cart/cartTotalPrice',
            'products': 'products/getProducts',
            'productsLoadStatus': 'products/getProductsLoadStatus',
        }),
        methods: {
            ...mapActions({
                'loadProducts': 'products/loadProducts',
                'checkout': 'cart/checkout'
            }),

            createOrder() {
                let order = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    phone_number: this.phone_number,
                    additional_phone_number: this.additional_phone_number,
                    city: this.city,
                    address: this.address,
                    note: this.note
                }
                this.checkout(order)
            }
        },
        mounted () {
            if(!this.products.length) {
                this.loadProducts()
            }
        }
    }
</script>

<style scoped>

</style>