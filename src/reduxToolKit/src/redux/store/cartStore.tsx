import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../CartSlice/CartSlice';
const CartStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default CartStore;
