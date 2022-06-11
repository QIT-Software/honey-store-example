<template>
  <div ref="appWrapper">
    <SearchBar @close-search-bar="isSearchBarActive = false" />
    <div class="main-content-wrapper d-flex clearfix">
      <MainHeader @toggle-search-bar="isSearchBarActive = !isSearchBarActive" />
      <keep-alive include="404">
        <router-view />
      </keep-alive>
    </div>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from "../components/Main/SearchBar.vue";
import MainHeader from "../components/Main/MainHeader.vue";
import MainFooter from "../components/Main/MainFooter.vue";

export default Vue.extend({
  name: "MainLayout",
  components: {
    SearchBar,
    MainHeader,
    MainFooter,
  },

  data() {
    return {
      isSearchBarActive: false,
    };
  },

  watch: {
    isSearchBarActive() {
      if (!this.isSearchBarActive) {
        this.$refs.appWrapper.classList.remove("search-wrapper-on");
      } else {
        this.$refs.appWrapper.classList.add("search-wrapper-on");
      }
    },
  },
});
</script>

<style scoped></style>
