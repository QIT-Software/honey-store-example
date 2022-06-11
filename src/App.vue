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
});
</script>
