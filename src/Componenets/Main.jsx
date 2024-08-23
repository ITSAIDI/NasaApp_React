function Main(props) {
    return (
        <div className="ImageContainer">
            <img className="SpaceImage" src= {props.data.hdurl} alt= {props.data.title }/>
        </div>
    );
}

export default Main;