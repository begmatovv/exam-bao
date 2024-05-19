import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, { payload }) => {
      const { product } = payload;
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.cartTotal += product.price * product.amount;
      toast.success("Item added to cart");
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
