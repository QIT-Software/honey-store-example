import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NProgress from "vue-nprogress";
import { ToastPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(ToastPlugin);
Vue.use(VueRouter);
Vue.use(NProgress);

const nprogress = new NProgress();
nprogress.configure({ speed: 450 });

new Vue({
  name: "HoneyStore",
  router,
  store,
  // @ts-ignore
  nprogress,
  render: (h) => h(App),
}).$mount("#app");
