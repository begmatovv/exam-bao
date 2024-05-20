import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const defaultState = {
  value: 0,
  cartItem: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {
    incrementCart: (state) => {
      state.value += 1;
    },
    decrementCart: (state) => {
      state.value -= 1;
    },
    addItem: (state, { payload }) => {
      const { products } = payload;

      console.log(products);
      const item = state.cartItem.find((i) => i.cartID === products.cartID);

      if (item) {
        item.amount += products.amount;
      } else {
        state.cartItem.push(products);
      }
      state.numItemsInCart += products.amount;
      state.cartTotal += products.price * products.amount;
      state.tax += 0.1 * state.cartTotal;
      state.orderTotal += state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("item added");
    },
    removeAll: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, { payload }) => {
      const { cartID } = payload;
      const products = state.cartItem.find((i) => i.cartID === cartID);
      state.cartItem = state.cartItem.filter((i) => i.cartID !== cartID);
       state.numItemsInCart -= products.amount;
      cartSlice.caseReducers.totalCalc(state)
      toast.success("cart update")
    },
    editCart: (state, { payload }) => {
        const { amount, cartID } = payload;
        const item = state.cartItem.find((i) => i.cartID === cartID);
        state.numItemsInCart += amount - item.amount;
        state.cartTotal += item.price * (amount - item.amount);
        item.amount = amount;
        cartSlice.caseReducers.totalCalc(state);
        toast.success("Cart updated");
    },
    totalCalc: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { incrementCart, decrementCart, addItem, removeItem, removeAll, editCart } =
  cartSlice.actions;
export default cartSlice.reducer;
