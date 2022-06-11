import catalogsRouter from "@/router/catalogs.router";

const Home = () => import("../pages/Home");
const Product = () => import("../pages/Product");
const Cart = () => import("../pages/CartPage");
const Checkout = () => import("../pages/Checkout");
const NotFound = () => import("../components/main/NotFound");

export default [
  [
    ...catalogsRouter,
    {
      path: "/",
      name: "home",
      meta: {
        title: "TajHoney",
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
        title: "Моя корзина",
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
      meta: {
        title: "Оформление заказа",
      },
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
      meta: {
        title: "404 - Страница не найдена",
      },
    },
    {
      path: "*",
      redirect: { name: "404" },
    },
  ],
];
