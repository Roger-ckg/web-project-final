import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import './index.css'
import profile from "../../../reducers/profile";


const ChangeProfile = ({profileData}) => {


    let dispatch = useDispatch();

    let [firstName, setFirstName] = useState(profileData.firstName);
    let [lastName, setLastName] = useState(profileData.lastName);
    let [bio, setBio] = useState(profileData.bio);
    let [location, setLocation] = useState(profileData.location);
    let [website, setWebsite] = useState(profileData.website);
    let [birthday, setBirthday] = useState(profileData.dateOfBirth);


    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handleBio = (event) => {
        setBio(event.target.value);
    }
    const handleLocation = (event) => {
        setLocation(event.target.value);
    }
    const handleWebsite = (event) => {
        setWebsite(event.target.value);
    }
    const handleBirthday = (event) => {
        setBirthday(event.target.value);
    }

    const clickSaveChanges = (event) => {
        dispatch({
            type:'save-changes',
            firstName:firstName,
            lastName:lastName,
            bio:bio,
            location:location,
            website:website,
            birthday:birthday
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-1">
                    <Link to="/profile">
                        <i className="fas fa-times fa-pull-right" style={{color:"white", marginTop:"6px"}}/>
                    </Link>
                </div>

                <div className="col-7">
                    <strong className="wd-edit-profile">Edit Your Profile</strong>
                </div>

                <div className="col-2">
                    <Link to="/profile">
                        <button type="submit" onClick={clickSaveChanges}
                                className="wd-save-profile btn btn-primary float-end rounded-pill col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <strong>Save</strong>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row" style={{marginLeft:"20px", marginTop:"10px"}}>
                <div className="col-12">
                    <img src={profileData.bannerPicture} className="wd-banner" alt={"banner"}/>
                </div>
            </div>

            <div className="row">
                <div className="col-10">
                    <img src={profileData.profilePicture} className="img-fluid wd-edit-ProfilePic" alt={"profilePic"}/>
                </div>
                <div className="col-2">
                </div>
            </div>


            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>First name</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={firstName} onChange={handleFirstName} type="textarea"
                           placeholder="First Name" className="wd-edit-text form-control" style={{marginLeft:"-20px"}}/>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>Last name</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={lastName} onChange={handleLastName} type="textarea"
                           placeholder="Last Name" className="wd-edit-text form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>Bio</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <textarea value={bio} onChange={handleBio}
                              placeholder="Bio" className="wd-edit-bio form-control" style={{marginLeft:"-20px"}}>
                    </textarea>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>Location</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={location} onChange={handleLocation} type="textarea"
                           placeholder="New York, NY" className="wd-edit-text form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>Website</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={website} onChange={handleWebsite} type="textarea"
                           placeholder="www.movie.com" className="wd-edit-text form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>Birthday</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={birthday} onChange={handleBirthday} type="textarea"
                           placeholder="Jan 1,1990" className="wd-text-edit form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>
        </>
    )
}

export default ChangeProfile;