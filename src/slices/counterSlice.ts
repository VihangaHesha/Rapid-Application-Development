import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface CounterState{
    count: number,
    error:string | null
}

const initialState : CounterState = {
    count: 0,
    error: null
}

export const incrementAsync
    = createAsyncThunk(
        'counter/incrementAsync',
    async (count: number)=>{
            await new Promise(resolve=> setTimeout(resolve,2000));
            return count;
    }
)

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            const newCount = state.count + 1;
            const hasError = newCount > 5;

            if (hasError){
                state.error = "Maximum value reached!!!"
            }else{
                state.count = newCount;
                state.error = null;
            }
        },
        decrement(state){
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            if (hasError){
                state.error = "Has Reached Minimum Value!!!"
            }else{
                state.count = newCount;
                state.error = null;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending,(state,action) =>{
            console.log("IncrementAsync is still pending")
            })
            .addCase(incrementAsync.fulfilled,(state,action) =>{
            state.count += action.payload;
            })
    }
});

export const {increment, decrement/*incrementAsync*/}= counterSlice.actions;
export default counterSlice.reducer;

/*
export function counterSlice(state = initialState , action : CounterAction) {
    const {type} = action;
    switch (type){
        case "increment":{
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return{
                ...state,
                count: hasError ? state.count + 1 : newCount ,
                error:hasError ? 'Has Reached Maximum Count!!!' : null
            }
        }
        case "decrement":{
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return {
                ...state,
                count:hasError ? state.count : newCount,
                error: hasError ? 'Has Reached Minimum Count!!!' : null
            }
        }
        default : return state;
    }
}
*/
