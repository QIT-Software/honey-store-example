<template>
    <div style="display: contents">
        <product-list></product-list>
    </div>

</template>

<script>
    import ProductList from '../components/product/ProductList'

    import { mapActions } from 'vuex'

    export default {
        name: "Home",
        components: {
            ProductList
        },

        methods: mapActions({
            loadProducts: 'products/loadProducts'
        }),

        created () {
            this.loadProducts()
        }
    }
</script>
