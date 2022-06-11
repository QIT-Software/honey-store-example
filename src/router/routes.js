import catalogsRouter from "@/router/catalogs.router";

const Home = () => import("../pages/HomePage");
const Product = () => import("../pages/ProductPage");
const Cart = () => import("../pages/CartPage");
const Checkout = () => import("../pages/CheckoutPage");
const NotFound = () => import("../components/main/NotFound");

export default [
  [
    {
      path: "/",
      name: "home",
      meta: {
        title: "HoneyStore",
        layout: "main",
      },
      component: Home,
    },
    {
      path: "/product/:slug",
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
    ...catalogsRouter,
    {
      path: "*",
      redirect: { name: "404" },
    },
  ],
];
