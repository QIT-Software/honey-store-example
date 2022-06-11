<template>
  <div ref="appWrapper">
    <SearchBar />
    <div class="main-content-wrapper d-flex clearfix">
      <MainHeader />
      <keep-alive include="404">
        <router-view></router-view>
      </keep-alive>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import Vue from "vue";
import SearchBar from "../components/main/SearchBar";
import MainHeader from "../components/main/MainHeader";
import MainFooter from "../components/main/MainFooter";

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
