import {create} from "zustand";


const useCartStore = create((set) => ({
  cartItems: [],
  subTotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,

  // Actions
  addToCart: (item) =>
    set((state) => {
      const isItemExist = state.cartItems.find((i) => i.id === item.id);
      if (isItemExist) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, item] };
      }
    }),
    increment: (itemId) => set((state) => {
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {};
    }),

  decrement: (itemId) =>
    set((state) => {
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item && item.quantity > 1) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
          ),
        };
      }
      return {};
    }),

  deleteFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== itemId),
    })),

  calculatePrice: () =>
    set((state) => {
      let sum = 0;
      state.cartItems.forEach((i) => (sum += i.price * i.quantity));
      const subTotal = sum;
      const shipping = (subTotal > 1000 || state.cartItems.length === 0) ? 0 : 200;
      const tax = +(subTotal * 0.18).toFixed();
      const total = subTotal + tax + shipping;

      return { subTotal, shipping, tax, total };
    }),
}));

export default useCartStore;
