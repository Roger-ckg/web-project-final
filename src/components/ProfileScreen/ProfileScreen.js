import {Link} from "react-router-dom";
import EditProfile from "./EditProfile";

const ProfileScreen = () => {
    return (
        <div className="container">
            <h1>ProfileScreen</h1>
            <Link to="/search">
                <EditProfile/>
            </Link>
        </div>
    )
};
export default ProfileScreen;