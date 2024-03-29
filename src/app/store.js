import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import cartReducer from '../slices/cartSlices'
export const store=configureStore({
    reducer:{
        userData:userReducer,
        cartData:cartReducer
    }
})