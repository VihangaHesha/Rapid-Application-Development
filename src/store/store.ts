import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./../slices/rootReducer.ts";
// import productReducer from "../slices/productsSlice.ts";
// import cartReducer from "../slices/cartSlice.ts";

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;