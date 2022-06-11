<template>
  <!-- Search Wrapper Area Start -->
  <div class="search-wrapper section-padding-100">
    <div class="search-close" @click="closeSearchBar">
      <i class="las la-lg la-times text-white"></i>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="search-content">
            <form v-on:submit.prevent="search">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Input what you are looking for..."
                v-on:keyup.enter="search"
                v-model="searchKeyword"
              />
              <button type="submit">
                <i class="icon las la-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Search Wrapper Area End -->
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "SearchBar",
  data() {
    return {
      searchKeyword: "",
    };
  },
  methods: {
    closeSearchBar() {
      this.$emit("close-search-bar");
    },
    search() {
      this.$router.push({
        name: "search",
        params: {
          search: this.searchKeyword,
        },
      });
      this.closeSearchBar();
    },
  },
});
</script>
