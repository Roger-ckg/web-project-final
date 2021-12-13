import {Link} from "react-router-dom";
import "../../index.css";
import {useSelector} from "react-redux";

const HomeScreen = () => {
    const loggedin = useSelector((state) => state.loggedin);
    const profile = useSelector((state) => state.profile);

    if (!loggedin) {
    return (
        <div className="container-fluid vh-100 home">
            <h1 className="home-title pt-5">MoviesHub</h1>
            <hr/>
            <div className="home-button m-3 mt-5">
                <span className="home-text">Search Movies as a guest:</span>
                <br/>
                <Link to="/search">
                    <button className="btn btn-danger m-2">Search</button>
                </Link>
            </div>
            <div className="home-button">
                <span className="home-text">Login if you are a member:</span>
                <br/>
                <Link to="/login">
                    <button className="btn btn-primary m-2">Login</button>
                </Link>
            </div>
            <br/>
            <div className="home-policy">
            <Link to="/privacy">
                <span className="home-text-policy">Privacy Policy</span>
            </Link>
            </div>
        </div>
    )
    }

    if (loggedin) {
        return (
            <div className="container-fluid vh-100 home">
                <h1 className="home-title pt-5">MoviesHub</h1>
                <hr/>
                <div className="home-button">
                    <span className="home-text">Welcome back! {profile.username}</span>
                    <br/>
                </div>
                <div className="home-button m-3 mt-5">
                    <span className="home-text">Search Movies:</span>
                    <br/>
                    <Link to="/search">
                        <button className="btn btn-danger m-2">Search</button>
                    </Link>
                </div>
                <br/>
                <div className="home-policy">
                    <Link to="/privacy">
                        <span className="home-text-policy">Privacy Policy</span>
                    </Link>
                </div>
            </div>
        )
    }
};
export default HomeScreen;