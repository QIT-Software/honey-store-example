import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import routes from "@/router/routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  document.title = to.meta.title || "HoneyStore";

  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
