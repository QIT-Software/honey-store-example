const Catalogs = () => import("../pages/CatalogsPage");

const defaultRouteMetaData = {
  title: "Catalogs - HoneyStore",
};

export default [
  {
    path: "/catalogs",
    name: "catalogs",
    meta: {
      ...defaultRouteMetaData,
    },
    component: Catalogs,
    props: false,
    children: [
      {
        path: ":slug?",
        name: "catalog-item",
        props: true,
        meta: {
          ...defaultRouteMetaData,
        },
      },
      {
        path: "?search=:search?",
        name: "search",
        props: true,
        meta: {
          ...defaultRouteMetaData,
        },
      },
    ],
  },
];
