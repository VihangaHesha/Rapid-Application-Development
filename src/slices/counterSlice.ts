import {createSlice} from "@reduxjs/toolkit";

export interface CounterState{
    count: number,
    error:string | null
}

const initialState : CounterState = {
    count: 0,
    error: null
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            const newCount = state.count + 1;
            const hasError = newCount > 5;

            /*hasError ? state.error = "Maximum Value Reached!!!" : state.count = newCount , state.error = null;*/
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
    }
});

export const {increment, decrement}= counterSlice.actions;
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
