<template>
  <!-- ##### main Content Wrapper Start ##### -->
  <div>
    <div class="main-content-wrapper d-flex clearfix">
      <main-header></main-header>
      <keep-alive include="cart">
        <router-view></router-view>
      </keep-alive>
    </div>
    <main-footer></main-footer>
  </div>
  <!-- ##### main Content Wrapper End ##### -->

  <!--        <main-footer></main-footer>-->
</template>

<script>
import mainHeader from "./MainHeader";
import mainFooter from "./MainFooter";

export default {
  name: "main-wrapper",
  components: {
    mainHeader,
    mainFooter,
  },
};
</script>
