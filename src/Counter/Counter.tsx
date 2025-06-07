import './Counter.css';
import {useEffect, useState} from "react";

export function Counter(props:any) {

    const [count,setCount] = useState(0);

    /*useEffect(() =>{
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

    return (
        <div className="counter">
            <h1>React Counter (Using Functional Component)</h1>
            <h2>Count : {count}</h2>
            <button className="button" >+</button>
            <button className="button" >-</button>
        </div>
    );
}

