import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <Link to="/search">
                Search
            </Link>
            <br/>
            <Link to="/login">
                Login
            </Link>
            <br/>
            <Link to="/privacy">
                Privacy Policy
            </Link>
        </div>
    )
};
export default HomeScreen;