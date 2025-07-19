import './App.css';
import { Route, Routes, useNavigate} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/Login/Login.tsx";
import {useEffect} from "react";
import {isTokenExpired} from "./auth/auth.ts";

function App(){

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken")
            navigate("/login");
        }
    }, [navigate]);

    return (
        <>
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}></Route>
                {/*This will render the Default Layout which shows the Navbar,MainContent and Footer(Common Components)*/}
                <Route path="/login" element={<Login />}></Route>
                {/*This will render the Login page and remove other components like Nav,Main Content and Footer.This will replace all that!*/}
            </Routes>
        </>
    );
}

export default App;
