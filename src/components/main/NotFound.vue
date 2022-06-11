<template>
  <div class="d-flex align-items-center text-center flex-column section-padding-100">
    <img src="@/assets/images/core-img/404.svg" class="error__image" />
    <h3 class="text-danger mt-4">
      <slot>Ошибка 404. Страница не найдена!</slot>
    </h3>
    <h6>
      Пойдёмте
      <router-link :to="{ name: 'home' }" class="text-warning">домой</router-link>, найдём что-нибудь вкусное
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
.error__image {
  width: 30%;
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
