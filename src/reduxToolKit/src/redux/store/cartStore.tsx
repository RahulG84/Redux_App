import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../CartSlice/CartSlice';
import authSlice from '../CartSlice/AuthSlice';
const CartStore = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice,
  },
});

export default CartStore;
