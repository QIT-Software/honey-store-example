<template>
  <div class="loader">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="87.59px"
      height="99.306px"
      viewBox="0 0 87.59 99.306"
      enable-background="new 0 0 87.59 99.306"
      xml:space="preserve"
    >
      <g>
        <path
          stroke="#777"
          stroke-miterlimit="10"
          d="M45.377,98.392c-0.953,0.55-2.513,0.552-3.467,0.005l-39.68-22.75
                                    c-0.954-0.547-1.732-1.895-1.729-2.995l0.139-45.739c0.003-1.1,0.785-2.45,1.738-3l39.837-23c0.953-0.55,2.513-0.552,3.467-0.005
                                    l39.68,22.75c0.954,0.547,1.732,1.895,1.729,2.995l-0.139,45.739c-0.003,1.1-0.785,2.45-1.738,3L45.377,98.392z"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheLoader",
});
</script>

<style scoped>
path {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  stroke-width: 0.75;
  fill-opacity: 0;
  animation: dash 2s infinite forwards;
  animation-delay: 0.5s;
  transform-origin: center center;
}
svg {
  position: relative;
  top: 35%;
  width: 200px;
  height: 100px;
  display: block;
  margin: 0 auto;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 300;
    fill-opacity: 0;
  }
  75% {
    fill-opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    transform: rotate(-180deg);
    fill: #fbb710;
    fill-opacity: 1;
  }
}

.loader {
  margin: 20px auto 50px;
}
</style>
