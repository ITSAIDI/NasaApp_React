import Main from "./Componenets/Main";
import SideBar from "./Componenets/SideBar";
import Footer from "./Componenets/Footer";

function App() {
    return (
        <div id="root">
                <Main />
                <SideBar /> {/* Sidebar now placed directly in the App */}
                <Footer />
                </div>

    );
}

export default App;