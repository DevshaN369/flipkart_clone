import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Cart:[]
}

export const cartSlice=createSlice({
    name:'card',
    initialState,
    reducers:{
        addCart:(state,action)=>{
            state.Cart=[...state.Cart,action.payload]
        },removeCart:(state,action)=>{
            state.Cart = state.Cart.filter((item) => item.id !== action.payload);
        }
    }
})

 export const {addCart,removeCart}=cartSlice.actions
 export default cartSlice.reducer