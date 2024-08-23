import Main from "./Componenets/Main";
import SideBar from "./Componenets/SideBar";
import Footer from "./Componenets/Footer";
import { useState,useEffect } from "react";

function App() {


    const [ShowSidebar,setShowSidebar] = useState(false)
    const [Data,setData]=useState(null)
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        async function FetchImage(params) {
            const NASA_KEY = import.meta.env.NASA_API_KEY;
            const url = 'https://api.nasa.gov/planetary/apod'+`?api_key=${"DyqgIQPtyglUGTxZmXhFd4XYzNYKuJjwcXdx3Wwu"}`
            try {
                const res = await fetch(url)
                const apidata = await res.json()
                setData(apidata)
                console.log('DATA \n',apidata)
                
            } catch (error) {
                console.log(error.message)
                
            }
            
        }
        FetchImage()

    },[])

    function handleToggleSidebar ()
    {
        setShowSidebar(prevState => !prevState);
    };

    return (
        <div id="root">
            {
                Data ? ( <Main data = {Data} />) : 
                (<div className="loading"> 
                        <i id = "gear" className="fa-solid fa-gear"></i>
                </div>)
            }
            {
                ShowSidebar && (<SideBar data = {Data} handleToggleSidebar_S = {handleToggleSidebar} /> )
            }
            {
                Data && <Footer data = {Data} handleToggleSidebar_F = {handleToggleSidebar}/>
            }
            </div>

    );
}
export default App;