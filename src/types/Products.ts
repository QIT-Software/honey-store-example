export type Product = {
  id: number;
  price: number;
};

export type ProductQueryOptions = "page" | "catalog" | "search";

export type ProductSearchOptions = {
  page?: string;
  catalog?: string;
  search?: string;
};
