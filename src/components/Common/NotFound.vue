<template>
  <div class="not-found-page d-flex align-items-center text-center flex-column section-padding-100">
    <img src="@/assets/images/core-img/404.svg" class="error__image" />
    <h3 class="text-danger mt-4">
      <slot>Ошибка 404. Page not found!</slot>
    </h3>
    <h6>
      Let's go
      <router-link :to="{ name: 'catalogs' }" class="text-warning">home</router-link>, we will find something else
      <strong>:)</strong>
    </h6>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-page {
  flex-grow: 1;
}
.error__image {
  width: 30%;
  max-height: 420px;
  position: relative;
}
a {
  font-size: 1rem;
}

a:hover,
:focus {
  font-size: 1rem;
}
</style>
