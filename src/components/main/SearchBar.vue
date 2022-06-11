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
                placeholder="Введите слово..."
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
import { mapActions } from "vuex";

export default {
  name: "SearchBar",

  data() {
    return {
      searchKeyword: "",
    };
  },

  methods: {
    closeSearchBar() {
      this.$parent.$data.isSearchBarActive = false;
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
};
</script>
