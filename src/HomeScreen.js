import {Link} from "react-router-dom";
import "./index.css";

const HomeScreen = () => {
    return (
        <div className="container home mt-2">
            <h1 className="home-title">Movies</h1>
            <hr/>
            <div className="home-button">
                <Link to="/search">
                    <button className="btn btn-danger m-5">Search Movies</button>
                </Link>
                <Link to="/login">
                    <button className="btn btn-primary m-5">Login</button>
                </Link>
            </div>
            <br/>
            <div className="home-policy">
            <Link to="/privacy">
                <span>Privacy Policy</span>
            </Link>
            </div>
        </div>
    )
};
export default HomeScreen;