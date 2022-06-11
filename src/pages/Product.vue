<template>
    <div class="content-wrapper">
        <the-loader v-if="productLoadStatus === 1" ></the-loader>
        <!-- Product Details Area Start -->
        <div v-else-if="productLoadStatus === 2" class="single-product-area section-padding-100 clearfix">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-7 mt-5 mt-xl-0 mb-30">
                        <div class="single_product_thumb">
                            <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <a class="gallery_img" href="@/assets/images/product-img/product1.jpg">
                                            <img class="d-block w-100" src="@/assets/images/product-img/product1.jpg" alt="First slide">
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
                                <p class="product-price">{{ product.price }} с.</p>
                                <a href="product-details.html">
                                    <h6>{{ product.name }}</h6>
                                </a>
                                <!-- Avaiable -->
                                <p class="avaibility"><i class="las la-square-full"></i> Есть на складе</p>
                            </div>

                            <div class="short_overview my-5">
                                <p>{{ product.description }}</p>
                            </div>

                            <!-- Add to Cart Form -->
                            <form class="cart clearfix" v-on:submit.prevent>
                                <div class="cart-btn d-flex mb-50">
                                    <p>Кол-во</p>
                                    <div class="quantity">
                                        <span class="qty-minus" @click="qty === 1 ? qty = 1 : qty--"><i class="las la-caret-down" aria-hidden="true"></i></span>
                                        <input type="number" class="qty-text" name="quantity" readonly="readonly" :value="qty">
                                        <span class="qty-plus" @click="qty++"><i class="las la-caret-up" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <button type="submit" name="addtocart" value="5" class="btn amado-btn" @click="addToCart">Добавить в корзину</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Product Details Area End -->
        <not-found v-else></not-found>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import NotFound from '../components/main/NotFound'
    import TheLoader from '../components/main/TheLoader'

    export default {
        name: "Product",
        components: {
            NotFound,
            TheLoader
        },
        data() {
            return {
                qty: 1,
            };
        },
        watch: {
            $route: 'fetchProduct'
        },
        computed: mapGetters({
            'product': 'products/getProduct',
            'productLoadStatus': 'products/getProductLoadStatus',
        }),
        methods: {
            ...mapActions({
                'loadProductBySlug': 'products/loadProductBySlug',
                'addProductToCart': 'cart/addToCart'
            }),

            fetchProduct() {
                let slug = this.$route.params.slug
                this.loadProductBySlug(slug)
            },

            addToCart() {
                let product = {
                    id: this.product.id,
                    qty: this.qty
                }
                this.addProductToCart({...product});
            }
        },
        mounted () {
            this.fetchProduct()
        }
    }
</script>

<style scoped>
    .content-wrapper {
        display: contents;
    }
</style>
