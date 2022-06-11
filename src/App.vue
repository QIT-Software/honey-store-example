<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default Vue.extend({
  name: "App",
  components: {
    MainLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
