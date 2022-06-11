import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";

const Home = () => import("../pages/Home");
const Catalogs = () => import("../pages/Catalogs");
const Product = () => import("../pages/Product");
const Cart = () => import("../pages/CartPage");
const Checkout = () => import("../pages/Checkout");
const NotFound = () => import("../components/main/NotFound");

// import product from '../components/product/product'
// import cart from '../components/cart/cart'
// import checkout from '../components/cart/checkout'

//Информационные компоненты
// import contacts from '../components/info/contacts'
// import delivering from '../components/info/delivering'

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
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
      path: "/catalogs",
      name: "catalogs",
      meta: {
        title: "Каталогы - TajHoney",
        layout: "main",
      },
      component: Catalogs,
      props: false,
      children: [
        {
          path: ":slug?",
          name: "catalog-item",
          props: true,
          meta: {
            title: "Каталогы - TajHoney",
          },
        },
        {
          path: "?search=:search?",
          name: "search",
          props: true,
          meta: {
            title: "Каталогы - TajHoney",
          },
        },
      ],
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
    // {
    //     path: '/product/:slug',
    //     name: 'product',
    //     component: product,
    //     props: true
    // },
    // {
    //     path: '/cart',
    //     name: 'cart',
    //     component: cart,
    //     props: true
    // },
    // {
    //     path: '/cart/checkout',
    //     name: 'checkout',
    //     component: checkout,
    //     props: true
    // },
    /* {
                    path: '/payment',
                    name: 'payment',
                    component: payment
                },
                {
                    path: '/contacts',
                    name: 'contacts',
                    component: contacts
                },
                {
                    path: '/delivering',
                    name: 'delivering',
                    component: delivering
                },
                {
                    path: '/about',
                    name: 'about',
                    component: info
                },
                {
                    path: '/politics',
                    name: 'politics',
                    component: politics
                },
                {
                    path: '/money-return',
                    name: 'money-return',
                    component: moneyReturn
                }*/
  ],
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  document.title = to.meta.title || "TajHoney";

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
