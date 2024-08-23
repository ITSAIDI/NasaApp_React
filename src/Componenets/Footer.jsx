function Footer(props) {
     const handleToggleSidebar_F = props.handleToggleSidebar_F;
     const data = props.data

    return (
        <footer>
            <div className="GradientBackground"></div>
            <h3>{data.title}
             <h4>Copyright &copy; {new Date().getFullYear()}</h4>
             <button style={{backgroundColor: "transparent", border: "none"}} onClick={handleToggleSidebar_F}>
                <i className="fa-solid fa-circle-info" style={{color: "white"}}></i>
            </button>
            </h3>

        </footer>
    );
}

export default Footer;