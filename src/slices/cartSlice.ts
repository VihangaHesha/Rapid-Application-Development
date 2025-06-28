import type {CartItem} from "../model/CartItem.ts";
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state: CartState, action: PayloadAction<ProductData>) {
            const existingItem = state.items.find((item) => item.product.id === action.payload.id)

            if (!existingItem) {
                state.items.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        },
        increaseQty(state: CartState , action : PayloadAction<number>) {
            //In here we check if the item is already exist or not. And if it is there we increase the quantity.
            const item = state.items.find((existingItem)=>
            existingItem.product.id=== action.payload)
            if (item){
                item.quantity += 1;
            }
        },
        decreaseQty(state: CartState , action: PayloadAction<number>) {
            //In here we check if the item is already exist or not and the item quantity is greater than 1. Only if
            // those conditions are true  we decrease the quantity.
            const item =state.items.find((existingItem)=>
            existingItem.product.id===action.payload)
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }
        }
    }
})

export const {addItemToCart,increaseQty,decreaseQty} = cartSlice.actions;
export default cartSlice.reducer;