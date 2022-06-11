import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import { ToastPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;
NProgress.configure({ speed: 450 });

Vue.use(ToastPlugin);

new Vue({
  name: "HoneyStore",
  router,
  store,
  NProgress,
  render: (h) => h(App),
}).$mount("#app");
