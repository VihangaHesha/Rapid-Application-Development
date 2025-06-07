/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/Login/Login.tsx";

function App(){
    return (
        <>
            <BrowserRouter>
                {/*<DefaultLayout/>*/}
                <Routes>
                    <Route path="/*" element={<DefaultLayout/>}></Route>
                    {/*This will render the Default Layout which shows the Navbar,MainContent and Footer(Common Components)*/}
                    <Route path="/login" element={<Login />}></Route>
                    {/*This will render the Login page and remove other components like Nav,Main Content and Footer.This will replace all that!*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
