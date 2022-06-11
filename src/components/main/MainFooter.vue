<template>
  <!-- ##### Footer Area Start ##### -->
  <footer class="footer_area clearfix">
    <div class="container">
      <div class="row align-items-center">
        <!-- Single Widget Area -->
        <div class="col-12 col-lg-4">
          <div class="single_widget_area">
            <!-- Logo -->
            <div class="footer-logo text-center">
              <router-link :to="{ name: 'home' }">
                <img src="@/assets/images/logo.svg" width="152" height="88" alt="" />
              </router-link>
            </div>
            <!-- Copywrite Text -->
            <p class="copywrite">Copyright &copy; {{ new Date().getFullYear() }} All rights reserved.</p>
          </div>
        </div>
        <!-- Single Widget Area -->
        <div class="col-12 col-lg-8">
          <div class="single_widget_area">
            <!-- Footer Menu -->
            <div class="footer_menu">
              <nav class="navbar navbar-expand-lg justify-content-end">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#footerNavContent"
                  aria-controls="footerNavContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fa fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="footerNavContent">
                  <ul class="navbar-nav ml-auto">
                    <router-link
                      v-for="route in navigationRoutes"
                      :key="route.routeName"
                      :to="{ name: route.routeName }"
                      v-slot="{ href, isActive, navigate }"
                    >
                      <li class="nav-item" :class="{ active: isActive }" @click="navigate">
                        <a :href="href">{{ route.label }}</a>
                      </li>
                    </router-link>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- ##### Footer Area End ##### -->
</template>

<script lang="ts">
import Vue from "vue";
import { navigationRoutes } from "@/constants/NavigationRoutes";

export default Vue.extend({
  name: "MainFooter",
  data() {
    return {
      navigationRoutes,
    };
  },
});
</script>
