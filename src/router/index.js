import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Catalogs = () => import("../pages/CatalogsPage");
const Product = () => import("../pages/ProductPage");
const Cart = () => import("../pages/CartPage");
const Checkout = () => import("../pages/CheckoutPage");
const NotFound = () => import("../components/Common/NotFound");
const About = () => import("../pages/AboutPage");
const Delivering = () => import("../pages/DeliveringPage");

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: { name: "catalogs" },
    },
    {
      path: "/product/:product_id",
      name: "product",
      component: Product,
      props: true,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: {
        title: "My cart",
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
      meta: {
        title: "Checkout",
      },
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
      meta: {
        title: "404 - Page not found",
      },
    },
    {
      path: "/catalogs",
      name: "catalogs",
      meta: {
        title: "Catalogs - HoneyStore",
      },
      component: Catalogs,
      props: false,
      children: [
        {
          path: ":slug?",
          name: "catalog-item",
          props: true,
          meta: {
            title: "Catalogs - HoneyStore",
          },
        },
        {
          path: "?search=:search?",
          name: "search",
          props: true,
          meta: {
            title: "Catalogs - HoneyStore",
          },
        },
      ],
    },
    {
      path: "/delivering",
      name: "delivering",
      component: Delivering,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "*",
      redirect: { name: "404" },
    },
  ],
});

export default router;
