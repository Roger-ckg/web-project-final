import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ProfileComponent from "./ProfileComponent";
const selectProfile = (state) => state.profile;

const ProfileScreen = () => {

    const profile = useSelector(selectProfile);
    useEffect(() => profile);

    return(
        <div className="row mt-3">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                 style={{"position": "relative"}}>
                <ProfileComponent profileData={profile}/>
            </div>
        </div>
    );
};
export default ProfileScreen;