function Footer() {
    return (
        <footer>
            <div className="GradientBackground"></div>
            <h3>Our beautiful Space Subhana Allah
             <h4>Copyright &copy; {new Date().getFullYear()}</h4>
             <button style={{backgroundColor: "transparent", border: "none"}}>
                <i className="fa-solid fa-circle-info" style={{color: "white"}}></i>
            </button>
            </h3>

        </footer>
    );
}

export default Footer;