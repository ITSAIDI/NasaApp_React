function SideBar(props) {
    const handleToggleSidebar_S = props.handleToggleSidebar_S
    return (
        <div className="sidebar">
            <div onClick = {handleToggleSidebar_S} className="bgOverlay"></div>
                <div className="sidebarContent">
                    <h2>Our Space</h2>
                    <div>
                        <p>Description</p>
                        <p>{props.data.explanation}</p>
                    </div>
                    <button onClick = {handleToggleSidebar_S}>
                    <i className="fa-solid fa-angle-right" style={{}}></i>
                    </button>
                </div>
        </div>
    );
}

export default SideBar