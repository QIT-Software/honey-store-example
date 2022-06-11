<template>
    <div style="display: contents">
        <the-sidebar></the-sidebar>

        <the-loader v-if="productsLoadStatus === 1" class="loader"></the-loader>

        <div class="amado_product_area section-padding-100">

            <div class="container-fluid">

                <div class="row" v-if="productsLoadStatus === 2">
                    <product-card
                            v-for="product in products"
                            :key="product.id"
                            :product="product">
                    </product-card>
                </div>

                <div v-else-if="productsLoadStatus === 3" class="m-auto p-1 alert-warning text-center">
                    <h3>
                        Здесь пока ничего нет, но скоро будет! <strong>:)</strong>
                    </h3>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import TheLoader from "../main/TheLoader";
    import TheSidebar from '../main/TheSidebar'
    import ProductCard from './ProductCard'

    import { mapGetters } from 'vuex'

    export default {
        name: 'ProductList',
        components: {
          TheLoader,
          TheSidebar,
          ProductCard
        },

        computed: {
            ...mapGetters({
                'products': 'products/getProducts',
                'productsLoadStatus': 'products/getProductsLoadStatus',
            }),
        }

    }
</script>
