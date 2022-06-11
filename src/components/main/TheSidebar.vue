<template>
  <div class="shop_sidebar_area">
    <!-- ##### Single Widget ##### -->
    <div class="widget catagory mb-50">
      <!-- Widget Title -->
      <h6 class="widget-title mb-30">Catalog</h6>

      <!--  Catagories  -->
      <div class="catagories-menu">
        <ul>
          <li v-for="catalog in catalogs" :key="catalog.id" :class="{ active: $route.params.slug === catalog.slug }">
            <router-link :to="{ name: 'catalog-item', params: { slug: catalog.slug } }">
              <span>{{ catalog.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- ##### Single Widget ##### -->
    <div class="widget price mb-50">
      <!-- Widget Title -->
      <h6 class="widget-title mb-30">Price</h6>

      <div class="widget-desc">
        <div class="slider-range">
          <VueSlider v-model="priceRange" :max="priceRange[1]" :tooltip="'none'" />
          <div class="range-price">{{ priceRange[0] }} $. - {{ priceRange[1] }} $.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import VueSlider from "vue-slider-component";
import "@/assets/scss/range-slider.scss";

export default Vue.extend({
  name: "TheSidebar",
  components: {
    VueSlider,
  },
  watch: {
    priceRange(newPriceRange) {
      this.priceRange = newPriceRange;
    },
  },
  computed: {
    ...mapGetters({
      getPriceRange: "products/getPriceRange",
      catalogs: "catalogs/getCatalogs",
    }),
    priceRange: {
      get() {
        return this.getPriceRange;
      },
      set(newPriceRangeValue) {
        this.setPriceRange(newPriceRangeValue);
      },
    },
  },
  methods: {
    ...mapActions({
      fetchCatalogs: "catalogs/fetchCatalogs",
      setPriceRange: "products/setPriceRange",
    }),
  },
  mounted() {
    this.fetchCatalogs();
  },
});
</script>
