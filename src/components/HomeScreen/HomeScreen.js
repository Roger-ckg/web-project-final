import {Link,useNavigate} from "react-router-dom";
import "../../index.css";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import service from "../ProfileScreen/service";


const HomeScreen = () => {
    // const loggedin = useSelector((state) => state.login);
    const profile = useSelector((state) => state.profile);
    console.log(profile)

    const navigate = useNavigate();


    const handleLoginLogout = () => {
        if (profile) {
            logout()
        } else {
            navigate("/login")
        }
    }

    const logout = () => {
        fetch(`http://localhost:4001/api/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(() => {
            navigate('/login');
            window.location.reload();
        });

    }



    const dispatch = useDispatch();

    useEffect(() => {
        service.findProfile(dispatch)
    }, []);

        return (

                profile !== {} ?

            <div className="container-fluid vh-100 home">
                {JSON.stringify(profile)}

                <h1 className="home-title pt-5">MoviesHub</h1>
                <hr/>
                <div className="home-button">
                    <span className="home-text">Welcome back! </span>
                    <br/>
                    <span className="home-text">{profile.username} </span>
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
                <div className="home-button m-3">

                    <button className="btn btn-primary m-2"
                            onClick={handleLoginLogout}>Logout</button>

                </div>
                <div className="home-policy">

                    <Link to="/privacy">
                        <span className="home-text-policy">Privacy Policy</span>
                    </Link>

                </div>


            </div>

                    :

        <div className="container-fluid vh-100 home">
            {JSON.stringify(profile)}
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



};
export default HomeScreen;