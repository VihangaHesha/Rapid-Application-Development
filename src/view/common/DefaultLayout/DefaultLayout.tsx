import {Navbar} from "../NavBar/Navbar.tsx";
import {MainContent} from "../MainContent/MainContent.tsx";
import {Footer} from "../Footer/Footer.tsx";

export function DefaultLayout() {
    return (
        <>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </>
    );
}