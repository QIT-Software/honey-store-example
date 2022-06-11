const Catalogs = () => import("../pages/Catalogs");

export default [
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
];
