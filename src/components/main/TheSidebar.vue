<template>
    <div class="shop_sidebar_area">

        <!-- ##### Single Widget ##### -->
        <div class="widget catagory mb-50">
            <!-- Widget Title -->
            <h6 class="widget-title mb-30">Каталог</h6>

            <!--  Catagories  -->
            <div class="catagories-menu">
                <ul>
                    <li v-for="catalog in catalogs" :key="catalog.id" :class="{ 'active': $route.params.slug === catalog.slug }">
                        <router-link :to = "{ name: 'catalog-item', params: { slug: catalog.slug } }">
                            <span>{{ catalog.name }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <!-- ##### Single Widget ##### -->
        <div class="widget price mb-50">

            <!-- Widget Title -->
            <h6 class="widget-title mb-30">Цена</h6>

            <div class="widget-desc">
                <div class="slider-range">
                    <vue-slider v-model="priceRange" :max="150" :tooltip="'none'"></vue-slider>
                    <div class="range-price">{{ priceRange[0] }} с. - {{ priceRange[1] }} с.</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import VueSlider from 'vue-slider-component'
    import '@/assets/scss/range-slider.scss'

    export default {
        name: "TheSidebar",
        components: {
            VueSlider
        },

        watch: {
            priceRange: function (newPriceRange) {
                this.priceRnage = newPriceRange
            }
        },

        computed: {
            ...mapGetters({
                getPriceRange: 'products/getPriceRange',
                catalogs: 'catalogs/getCatalogs'
            }),
            priceRange: {
              get(){
                return this.getPriceRange
              },
              set(newPriceRangeValue){
                  this.setPriceRange(newPriceRangeValue)
              }
            }
        },

        methods: {
            ...mapActions({
                loadCatalogs: 'catalogs/loadCatalogs',
                setPriceRange: 'products/setPriceRange'
            })
        },

        mounted() {
            this.loadCatalogs()
        }
    }
</script>