
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./index.css"
import {Link} from "react-router-dom";



const ProfileComponent = ({profileData}) => {
    console.log(profileData);

    const dispatch = useDispatch();

    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left fa-1x" />
                </div>

                <div className="col-11">
                    <div className="wd-highlight">{profileData.firstName} {profileData.lastName}</div>
                    <div className="wd-general">222 reviews</div>
                </div>

            </div>
            <div>
                <div className="position-relative">
                    <img className="pos-absolute w-100" src="../../../images/banner-pic1.jpg" alt="bannerPic"/>

                    <div className="pos-profile wd-zindex-front">
                        <img className="rounded-circle wd-profile border wd-white-ex"
                             src="../../../images/profile-pic1.jpg" alt="profilePic"/>
                    </div>
                </div>

                <Link to="/edit-profile">
                    <div className="mt-2 float-end"><a className="btn btn-outline-dark wd-round">Edit Your Profile</a></div>
                </Link>

                <br/><br/>
                <div className="mt-4">
                    <div>
                        <div className="wd-highlight">{profileData.firstName} {profileData.lastName}</div>
                        <div className="wd-general">@{profileData.handle}</div>
                        <p className="wd-paragraph pt-2">
                            {profileData.bio}
                        </p>

                        <div className="wd-general pb-2">
                                    <span className="me-4">
                                        <i className="fas fa-map-marker-alt pe-1"/>
                                        {profileData.location}
                                    </span>

                            <span className="me-4">
                                        <i className="fas fa-birthday-cake pe-1"/>
                                {profileData.dateOfBirth}
                                    </span>

                            <span className="me-4">
                                        <i className="far fa-calendar pe-1"/>
                                {profileData.dateJoined}
                                    </span>

                        </div>

                        <div className="wd-general">
                            <span className="pe-2"><b className="text-white">{profileData.followingCount}</b> Following</span>
                            <b className="text-white">{profileData.followersCount}</b> Followers</div>
                    </div>
                </div>
                <br/>

            </div>


        </div>
    );
}
export default ProfileComponent;
