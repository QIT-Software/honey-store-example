export type Product = {
  id: number;
  name: string;
  price: number;
  catalog_id: number;
};

export type ProductQueryOptions = "catalog" | "search";

export type ProductSearchOptions = {
  catalog?: string;
  search?: string;
};
