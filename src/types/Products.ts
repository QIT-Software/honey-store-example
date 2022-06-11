export type Product = {
  id: number;
  price: number;
};

export type ProductQueryOptions = "page" | "category" | "search";

export type ProductSearchOptions = Record<ProductQueryOptions, string>;
