import {createSlice} from '@reduxjs/toolkit';

const initialState: any = [];
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.push(action.payload);
    },
    removeCartItem(state, action) {
      return state.filter(
        (item: any, index: number) => index !== action.payload,
      );
    },
  },
});

export const {addCartItem, removeCartItem} = CartSlice.actions;
export default CartSlice.reducer;
