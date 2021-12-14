
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import "./index.css"
import {Link, useHistory} from "react-router-dom";

const ProfileComponent = ({profileData}) => {

    const [edit, setEdit] = useState(false);


    return(
        <>
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left fa-1x" />
                </div>

                <div className="col-11">
                    <div className="wd-highlight">Welcome to the MovieHub!</div>
                    <div className="wd-highlight">{profileData.firstName} {profileData.lastName}</div>
                    <div className="wd-general">222 reviews</div>
                </div>

            </div>
            <div>
                <div className="position-relative">
                    <img className="pos-absolute w-100" src={profileData.bannerPicture} alt="bannerPic"/>

                    <div className="pos-profile wd-zindex-front">
                        <img className="rounded-circle wd-profile border wd-white-ex" src={profileData.profilePicture} alt="profilePic"/>
                    </div>
                </div>

                <Link to="/edit-profile">
                    <div className="mt-2 float-end"><a className="btn btn-outline-dark wd-round">Edit Profile</a></div>
                </Link>

                <br/><br/>
                <div className="mt-1">
                    <div>
                        <div className="wd-highlight">{profileData.firstName} {profileData.lastName}</div>
                        <div className="wd-general">@{profileData.firstName}</div>
                        <p className="wd-paragraph pt-2">
                            {profileData.bio}</p>

                        <div className="wd-general pb-2">
                                    <span className="me-4">
                                        <i className="fas fa-map-marker-alt pe-1"/>
                                        {profileData.location}
                                    </span>
                            <span className="me-4">
                                        <i className="fas fa-birthday-cake pe-1"/>
                                {profileData.dateOfBirth}
                                    </span>

                        </div>

                    </div>
                </div>
                <br/>

            </div>


        </div>
            </>
    );
}
export default ProfileComponent;
