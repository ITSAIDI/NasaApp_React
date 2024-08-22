import Main from "./Componenets/Main";
import SideBar from "./Componenets/SideBar";
import Footer from "./Componenets/Footer";
import { useState } from "react";

function App() {

    const [ShowSidebar,setShowSidebar] = useState(true)
    return (
        <div id="root">
                <Main />
                {
                    ShowSidebar && (<SideBar /> )
                }
                <Footer />
                </div>

    );
}
export default App;