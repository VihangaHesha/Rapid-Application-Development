import './Counter.css';
import {useReducer} from "react";
import {counterReducer} from "../../reducers/counterReducer";
import {Message} from "../Message/Message";

export function Counter() {

    const [ state  , dispatch ] = useReducer(
        counterReducer, {
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

