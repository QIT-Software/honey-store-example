import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import { ToastPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
NProgress.configure({ speed: 450 });

Vue.use(ToastPlugin);
Vue.use(VueRouter);

new Vue({
  name: "HoneyStore",
  router,
  store,
  NProgress,
  render: (h) => h(App),
}).$mount("#app");
