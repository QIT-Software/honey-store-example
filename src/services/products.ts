import { ProductSearchOptions } from "@/types/Products";
import { mockCheckoutResponse, mockProductByIdResponse, mockProductsResponse } from "@/constants/MockedData";
import { CartItem } from "@/types/Cart";

export type CheckoutOrderForm = {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  product: string;
};

export type CheckoutOrder = CheckoutOrderForm & { products: CartItem[] };

export default {
  getProducts(options: ProductSearchOptions = {}) {
    return mockProductsResponse(options);
  },

  getProductById(productId: number) {
    return mockProductByIdResponse(productId);
  },

  checkout(order: CheckoutOrder) {
    return mockCheckoutResponse(order);
  },
};
