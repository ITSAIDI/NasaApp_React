function Footer() {
    return (
        <footer>
            <h3>Our beautiful Space Subhana Allah</h3>
            <h4>Copyright &copy; {new Date().getFullYear()}</h4>
            <button style={{backgroundColor: "transparent", border: "none"}}>
                <i className="fa-solid fa-circle-info" style={{color: "white"}}></i>
            </button>
        </footer>
    );
}

export default Footer;