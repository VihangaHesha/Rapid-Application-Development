import './Counter.css';
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/Store";
import {decrement, increment, incrementAsync} from "../../slices/counterSlice";


export function Counter() {

    const dispatch = useDispatch<AppDispatch>();

   /* //We just get the state and assign it to a variable and use it in the code without creating to variables
    const count = useSelector(
        (state:CounterState ) => state.count
    );
    const error = useSelector(
        (state:CounterState ) => state.error
    );*/

    const {count,error} = useSelector((state: RootState) => state.counter )

    return (
        <div className="counter">
            <h1>React Counter (Using Redux)</h1>
            <h2>Count : {count}</h2>
            {error && <span className="error">{error}</span>}
            <br/>
           {/* <button className="button" onClick={()=> dispatch({type:'decrement'})}>-</button>
            <button className="button" onClick={()=> dispatch({type:'increment'})}>+</button>*/}

            {/*Bellow we need to import the dispatch actions from the slice as we have done the logic in there*/}
            <button className="button" onClick={()=> dispatch(decrement())}>-</button>
            <button className="button" onClick={()=> dispatch(increment())}>+</button>
            <br/>
            <button className="button" onClick={()=> dispatch(incrementAsync(1))}>Async Add 1</button>
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

