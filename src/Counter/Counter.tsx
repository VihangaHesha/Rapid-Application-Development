import './Counter.css';
import {useReducer} from "react";
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
            return{
                ...state,
                count:state.count + 1
            }
        }
        case "decrement":{
            return {
                ...state,
                count: state.count - 1
            }
        }
        default : return state;
    }
}

export function Counter(props:any) {

    const [ state  , dispatch ] = useReducer(
        reducer, {
            count : 0,
            error:null
    }
    );

    return (
        <div className="counter">
            <h1>React Counter (Using Functional Component)</h1>
            <h2>Count : {state.count}</h2>
            <button className="button" onClick={()=> dispatch({type:'decrement'})}>-</button>
            <button className="button" onClick={()=> dispatch({type:'increment'})}>+</button>
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

