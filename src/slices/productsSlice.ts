import {createSlice} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";

interface ProductState {
    list: ProductData[],
    error: string | null | undefined;
}

const initialState: ProductState = {
    list: [],
    error: null,
}

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        const resp = await backendApi.get("/products/all")
        return await resp.data
        /*const response = await fetch('./product-data.json')
        return await response.json();*/
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, () => {
                alert("Products are loading... Please wait.");
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.error = action.error.message;
                alert(`Error: ${state.error}`);
            })
    }
})

export default productSlice.reducer