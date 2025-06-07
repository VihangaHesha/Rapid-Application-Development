import './Counter.css';
import {useReducer} from "react";
import {Message} from "../Message/Message";
// import {useEffect, useState} from "react";


//Define the state of the Component(STEP 01)
interface State{
    count: number,
    error:string | null
}

//Define the actions of the managed within the component(STEP 02)
interface Action{
    type: 'increment' | 'decrement'
}

function reducer(state : State , action : Action) {
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

export function Counter() {

    const [ state  , dispatch ] = useReducer(
        reducer, {
            count : 0,
            error:null
    }
    );

    return (
        <div className="counter">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count : {state.count}</h2>
            {state.error && <span className="error">{state.error}</span>}
            <br/>
            <button className="button" onClick={()=> dispatch({type:'decrement'})}>-</button>
            <button className="button" onClick={()=> dispatch({type:'increment'})}>+</button>
            <Message/>
        </div>
    );

    /*const [count,setCount] = useState(0);

    useEffect(() =>{
        alert("componentDidMount: Component has been mounted!!"
        +"Props: "+props.data)
        //In functional components we have useEffect as the componentDidMount in class component
        return()=>{
            alert("componentDidUnmount: Component has been unmounted!!")
            //In functional components we use this return code block as the componentDidUnmount in class component
        }
    },[]);//Run only once!!!

    const increment = ()=>{
        setCount((prevCount) => prevCount+1)
    }

    const decrement = ()=>{
        setCount((prevCount) => prevCount-1)
    }

    useEffect(() => {
        alert("componentDidUpdate: Count Changed to: "+ count)
    }, [count]);*/
}

