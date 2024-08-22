import Main from "./Componenets/Main";
import SideBar from "./Componenets/SideBar";
import Footer from "./Componenets/Footer";

function App() {
    return (
        <div id="root">
            <div className="wrapper">
                <Main />
                <SideBar /> {/* Sidebar now placed directly in the App */}
            </div>
            <Footer />
        </div>
    );
}

export default App;