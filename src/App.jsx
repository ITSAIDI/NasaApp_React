import Main from "./Componenets/Main";
import SideBar from "./Componenets/SideBar";
import Footer from "./Componenets/Footer";
import { useState } from "react";

function App() {

    const NASA_API = import.meta.env.NASA_API_KEY;

    const [ShowSidebar,setShowSidebar] = useState(false)

    function handleToggleSidebar ()
    {
        setShowSidebar(prevState => !prevState);
    };

    return (
        <div id="root">
                <Main />
                {
                    ShowSidebar && (<SideBar handleToggleSidebar_S = {handleToggleSidebar} /> )
                }
                <Footer handleToggleSidebar_F = {handleToggleSidebar}/>
                </div>

    );
}
export default App;