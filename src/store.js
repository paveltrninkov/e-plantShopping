import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 export default store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
