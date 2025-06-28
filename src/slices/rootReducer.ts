import {combineReducers} from "redux";
import productReducer from "./productsSlice.ts";
import cartReducer from "./cartSlice.ts";

// Combine all reducers into a single one (root reducer)
export const rootReducer = combineReducers(
    {
        products: productReducer,
        cart: cartReducer
    }
)

export type RootReducerState = ReturnType<typeof rootReducer>