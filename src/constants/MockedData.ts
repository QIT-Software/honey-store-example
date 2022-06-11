import { Product } from "@/types/Products";
import { Catalog } from "@/types/Catalogs";

export const mockCatalogs: Catalog[] = [
  {
    id: 1,
    slug: "canadian",
    name: "Canadian honey",
  },
  {
    id: 2,
    slug: "asian",
    name: "Asian honey",
  },
  {
    id: 3,
    slug: "european",
    name: "European honey",
  },
  {
    id: 4,
    slug: "italian",
    name: "Italian honey",
  },
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Clover Honey",
    catalog_id: 1,
    price: 150,
  },
  {
    id: 2,
    name: "Wildflower Honey",
    catalog_id: 2,
    price: 20,
  },
  {
    id: 3,
    name: "Acacia Honey",
    catalog_id: 3,
    price: 60,
  },
  {
    id: 4,
    name: "Alfalfa Honey",
    catalog_id: 4,
    price: 500,
  },
  {
    id: 5,
    name: "Buckwheat Honey",
    catalog_id: 2,
    price: 140,
  },
  {
    id: 6,
    name: "Creamed Honey",
    catalog_id: 3,
    price: 800,
  },
];
