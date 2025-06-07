//Define the state of the Component(STEP 01)
export interface CounterState{
    count: number,
    error:string | null
}

//Define the actions of the managed within the component(STEP 02)
interface CounterAction{
    type: 'increment' | 'decrement'
}

export function counterReducer(state : CounterState , action : CounterAction) {
    const {type} = action;
    switch (type){
        case "increment":{
            const newCount: number = state.count + 1;
            const hasError = newCount > 5;
            return{
                ...state,
                count: hasError ? state.count + 1 : newCount ,
                error:hasError ? 'Has Reached Maximum Count!!!' : null
            }
        }
        case "decrement":{
            const newCount : number = state.count - 1;
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
