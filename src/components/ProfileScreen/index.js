import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ProfileComponent from "./ProfileComponent";
import service from "./service";



const selectProfile = (state) => state.profile;

const ProfileScreen = () => {

    const [edit, setEdit] = useState(false);

    const profileData = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => {
//        debugger;
        service.findProfile(dispatch)
    }, []);


    return(
        <div className="row mt-3">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                 style={{"position": "relative"}}>
                <ProfileComponent profileData={profileData}/>
                {/*{JSON.stringify(profileData)}*/}
            </div>
        </div>
    );
};
export default ProfileScreen;