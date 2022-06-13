<template>
  <div class="shop_sidebar_area">
    <!-- ##### Single Widget ##### -->
    <div class="widget catagory mb-50">
      <!-- Widget Title -->
      <h6 class="widget-title mb-30">Catalogs</h6>

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
          <VueSlider v-model="localPriceRange" :max="maxPrice" :tooltip="'none'" />
          <div class="range-price">{{ localPriceRange[0] }} $. - {{ localPriceRange[1] }} $.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import VueSlider from "vue-slider-component";
import "@/assets/scss/range-slider.scss";

export default Vue.extend({
  name: "TheSidebar",
  components: {
    VueSlider,
  },
  computed: {
    ...mapState("products", ["priceRange", "maxPrice"]),
    ...mapState("catalogs", ["catalogs"]),
    localPriceRange: {
      get() {
        return this.priceRange;
      },
      set(newPriceRangeValue) {
        this.$store.commit("products/setPriceRange", newPriceRangeValue);
      },
    },
  },
  methods: {
    ...mapActions({
      fetchCatalogs: "catalogs/fetchCatalogs",
    }),
  },
  mounted() {
    this.fetchCatalogs();
  },
});
</script>
