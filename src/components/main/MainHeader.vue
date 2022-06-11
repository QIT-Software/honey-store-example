<template>
  <div ref="header">
    <!-- Mobile Nav (max width 767px)-->
    <div class="mobile-nav">
      <!-- Navbar Brand -->
      <div class="amado-navbar-brand">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/images/core-img/logo-black.svg" width="100" alt="" />
        </router-link>
      </div>
      <!-- Navbar Toggler -->
      <div class="amado-navbar-toggler" @click="toggleNavigation">
        <i class="las la-2x la-bars"></i>
      </div>
    </div>

    <!-- Header Area Start -->
    <header class="header-area clearfix" :class="{ 'bp-xs-on': showNav }">
      <!-- Close Icon -->
      <div class="nav-close" @click="toggleNavigation">
        <i class="las la-lg la-times"></i>
      </div>
      <!-- Logo -->
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/images/core-img/logo-black.svg" width="152" height="88" alt="" />
        </router-link>
      </div>
      <!-- Amado Nav -->
      <nav class="amado-nav">
        <ul>
          <router-link
            v-slot="{ href, isActive, navigate }"
            v-for="route in navigationRoutes"
            :key="route.routeName"
            :to="{ name: route.routeName }"
          >
            <li :class="{ active: isActive }" @click="navigate">
              <a :href="href">
                {{ route.label }}
              </a>
            </li>
          </router-link>
        </ul>
      </nav>
      <!-- Cart Menu -->
      <div class="cart-fav-search mt-50 mb-100">
        <router-link :to="{ name: 'cart' }" class="cart-nav" :class="{ active: $route.name === 'cart' }">
          <i class="las la-lg la-shopping-cart"></i> Cart <span>({{ cartTotal }})</span>
        </router-link>
        <a href="javascript:void(0)" class="search-nav" @click="searchBarToggle">
          <i class="las la-lg la-search"></i> Search
        </a>
      </div>
      <!-- Social Button -->
      <div class="social-info d-flex justify-content-left">
        <a href="#"><i class="lab la-instagram"></i></a>
        <a href="#" class="ml-3"><i class="lab la-facebook"></i></a>
      </div>
    </header>
    <!-- Header Area End -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { navigationRoutes } from "@/constants/NavigationRoutes";

export default Vue.extend({
  name: "MainHeader",
  data() {
    return {
      showNav: false,
      navigationRoutes,
    };
  },
  computed: {
    ...mapGetters({
      cartTotal: "cart/cartTotal",
    }),
  },
  methods: {
    toggleNavigation() {
      this.showNav = !this.showNav;
    },
    searchBarToggle() {
      this.$emit("toggle-search-bar");
    },
  },
});
</script>
