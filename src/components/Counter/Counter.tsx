import './Counter.css';
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {CounterState} from "../../store/Store";
import {decrement, increment} from "../../actions/counterActions";

export function Counter() {

    /*const [ state,dispatch ] = useReducer(
        counterReducer, {
            count : 0,
            error:null
    }
    );*/

    const dispatch = useDispatch();

    //We just get the state and assign it to a variable and use it in the code without creating to variables
    const count = useSelector(
        (state:CounterState ) => state.count
    );
    const error = useSelector(
        (state:CounterState ) => state.error
    );

    return (
        <div className="counter">
            <h1>React Counter (Using useReducer())</h1>
            <h2>Count : {count}</h2>
            {error && <span className="error">{error}</span>}
            <br/>
           {/* <button className="button" onClick={()=> dispatch({type:'decrement'})}>-</button>
            <button className="button" onClick={()=> dispatch({type:'increment'})}>+</button>*/}

            {/*With the help of counterAction.ts now we can get it from the ts file rather that hard coding it*/}
            <button className="button" onClick={()=> dispatch(decrement())}>-</button>
            <button className="button" onClick={()=> dispatch(increment())}>+</button>

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

