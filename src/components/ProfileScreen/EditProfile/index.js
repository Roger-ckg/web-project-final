import ChangeProfile from "./ChangeProfile";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import service from "../service";


const selectProfile = (state) => state.profile;

const EditProfile = () => {
    const profile = useSelector(selectProfile);
    const NewProfile = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => service.findProfileById("", dispatch), []);
    return (
        <div className="row py-5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <ChangeProfile/>
            </div>

        </div>
    )
}

export default EditProfile;