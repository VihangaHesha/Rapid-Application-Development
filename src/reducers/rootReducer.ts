import {combineSlices} from "@reduxjs/toolkit";
import productReducer from "../slices/productsSlice.ts"

export const rootReducer =combineSlices({
    product : productReducer
})

export type RootState = ReturnType<typeof rootReducer>