import {combineReducers} from "redux";
import counterReducer from "../slices/counterSlice"


export const rootReducer = combineReducers({
    counter : counterReducer
    //When we have more reducers we can just simply add a comma and do the same thing.(, product : productReducer ,...)
})

export type RootState = ReturnType<typeof rootReducer>;