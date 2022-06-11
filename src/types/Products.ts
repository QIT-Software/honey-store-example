export type Product = {
  id: number;
  name: string;
  price: number;
  catalog_id: number;
  description: string;
};

export type ProductQueryOptions = "catalog" | "search";

export type ProductSearchOptions = {
  catalog?: string;
  search?: string;
};
