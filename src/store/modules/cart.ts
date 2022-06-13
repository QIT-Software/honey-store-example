import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import ProductsApi, { CheckoutOrder, CheckoutOrderForm } from "../../services/products";
import { CartItem } from "@/types/Cart";

@Module({
  namespaced: true,
})
export default class CartModule extends VuexModule {
  public items: CartItem[] = [];
  public checkoutStatus: string | null = null;

  get getItems() {
    return this.items
      .map((item) => {
        const product = this.context.rootState.products.products.find((product) => product.id === item.id);
        if (product) {
          return {
            ...product,
            quantity: item.quantity,
          };
        }
      })
      .filter(Boolean);
  }

  get cartItemsCount() {
    return this.items.length ?? 0;
  }

  get cartTotalPrice() {
    return this.getItems.reduce((totalPrice, item) => {
      totalPrice += item.price * item.quantity;
      return totalPrice;
    }, 0);
  }

  @Action
  public addToCart(product) {
    this.context.commit("setCheckoutStatus", null);
    this.context.commit("addItemCart", product);
  }

  @Action
  public checkout(order: CheckoutOrderForm): Promise<void> {
    const payloadOrder: CheckoutOrder = { ...order, products: this.items };

    return ProductsApi.checkout(payloadOrder)
      .then(() => {
        this.context.commit("clearCart");
        this.context.commit("setCheckoutStatus", "successful");
      })
      .catch(() => {
        this.context.commit("setCheckoutStatus", "failed");
      });
  }

  @Mutation
  public addItemCart({ id, quantity }: CartItem) {
    const addedItem = this.items.find((cartItem) => cartItem.id === id);

    if (addedItem) {
      addedItem.quantity += quantity;
      return;
    }

    this.items.push({ id, quantity });
  }

  @Mutation
  public setCheckoutStatus(status: string): void {
    this.checkoutStatus = status;
  }

  @Mutation
  public clearCart() {
    this.items = [];
  }

  @Mutation
  public setCartItems(items: CartItem[]) {
    this.items = items;
  }

  @Mutation
  public removeOneFromCart(itemId: number): void {
    const cartItem = this.items.find((item) => item.id === itemId);
    if (cartItem?.quantity > 1) {
      cartItem.quantity -= 1;
      return;
    }

    this.items = this.items.filter((item) => item.id !== itemId);
  }
}
