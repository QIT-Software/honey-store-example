import axios, { AxiosResponse } from "axios";
import { ProductSearchOptions } from "@/types/Products";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type CheckoutOrderForm = {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  product: string;
};

export type CheckoutOrder = CheckoutOrderForm & { products: CartItem[] };

const getQueryParameters = (options: ProductSearchOptions): string => {
  const queries: string[] = [];

  Object.entries(options).forEach(([optionName, optionValue]) => {
    if (optionValue) {
      queries.push(`${optionName}=${optionValue}`);
    }
  });

  return queries.join("&");
};

export default {
  getProducts(options: ProductSearchOptions) {
    const queryParameters = getQueryParameters(options);
    return axios.get(`products?${queryParameters}`).then(({ data }) => data);
  },

  getProductBySlug(slug: string) {
    return axios.get(`products/${slug}`).then(({ data }) => data);
  },

  checkout(order: CheckoutOrder): Promise<AxiosResponse> {
    return axios.post("checkout", order).then(({ data }) => data);
  },
};
