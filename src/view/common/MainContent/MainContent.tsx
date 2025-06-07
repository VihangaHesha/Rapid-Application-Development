import "./MainContent.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {Services} from "../../pages/Services/Services.tsx";
import {ShoppingCart} from "../../pages/ShoppinCart/ShoppingCart.tsx";
import {itemsList} from "../ModifyCart/ModifyCart.tsx";

export function MainContent() {
    return (
        <div className="flex flex-col w-full overflow-auto p-2.5 h-[78vh]">
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/services" element={<Services/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/cart" element={<ShoppingCart itemList={itemsList}/>}></Route>
                </Routes>
            </div>
        </div>
    );
}