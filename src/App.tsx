import React, {createContext} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Provider} from "react-redux";
import {store} from "./store/Store";

export const MessageContext = createContext('');

function App(){

    const message = "Hello There";

    return(

        /*We need to wrap the whole component from the Provider to let all
        the child components hava access to the shared data/store*/
        <Provider store={store} >
            <MessageContext.Provider value={message}>
                <div className="app">
                    <Counter/>
                </div>
            </MessageContext.Provider>
        </Provider>
    )
}

export default App;