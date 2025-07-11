import type {ContactData} from "../model/ContactData.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";


interface ContactState {
    list : ContactData[],
    error: string | null | undefined;
}

const initialState: ContactState = {
    list: [],
    error: null,
}

export const saveMessage = createAsyncThunk(
    'contact/saveMessage',
    async () => {
        const resp = await backendApi.post("/contact/save")
        return await resp.data
    }
)

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveMessage.pending, () => {
                alert("Message is being sent!!");
            })
            .addCase(saveMessage.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(saveMessage.rejected, (state, action) => {
                state.error = action.error.message;
                alert(`Error: ${state.error}`);
            })
    }
})

export default contactSlice.reducer;