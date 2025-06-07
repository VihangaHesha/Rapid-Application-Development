import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App(){
    return(
        <div className="app">
            <Counter data={"Hello"}/>
        </div>
    )
}

export default App;