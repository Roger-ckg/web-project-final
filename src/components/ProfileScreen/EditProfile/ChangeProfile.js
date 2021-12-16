import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import './index.css'
import service from "../service";



const ChangeProfile = ({profileData}) => {
    const profile = useSelector(state => state.profile);

    const [edit, setEdit] = useState(false);

    let dispatch = useDispatch();
    //state variables
    let [username, setUsername] = useState(profileData.username);
    let [email,setEmail] = useState(profileData.email);
    let [password, setPassword] = useState(profileData.password);



    const handleusername = (event) => {
        setUsername(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlepassword = (event) => {
        setPassword(event.target.value);
    }



    const clickSaveChanges = (event) => {
        const newProfile = {
            ...profileData,
            username:username,
            email:email,
            password:password,
        }
        service.updateProfile(newProfile, dispatch);
        setEdit(!edit);
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
                    <img src={"../../../images/banner1.jpg"} className="wd-banner" alt={"banner"}/>
                </div>
            </div>

            <div className="row">
                <div className="col-10">
                    <img src={"../../../images/profile-pic1.jpg"} className="img-fluid wd-edit-ProfilePic" alt={"profilePic"}/>
                </div>
                <div className="col-2">
                </div>
            </div>


            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>username</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={username} onChange={handleusername} type="textarea"
                           placeholder="e.g. Joe123" className="wd-edit-text form-control" style={{marginLeft:"-20px"}}/>
                </div>
            </div>

            {/*<div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>*/}
            {/*    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">*/}
            {/*        <p className="col-12" style={{color:"white", marginTop:"5px"}}>Last name</p>*/}
            {/*    </div>*/}
            {/*    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">*/}
            {/*        <input value={lastName} onChange={handleLastName} type="textarea"*/}
            {/*               placeholder="Last Name" className="wd-edit-text form-control" style={{marginLeft:"-20px"}}>*/}
            {/*        </input>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>Email</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <textarea value={email} onChange={handleEmail}
                              placeholder="e.g. Joe123@gmail.com" className="wd-edit-bio form-control" style={{marginLeft:"-20px"}}>
                    </textarea>
                </div>
            </div>

            <div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <p className="col-12" style={{color:"white", marginTop:"5px"}}>Password</p>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <input value={password} onChange={handlepassword} type="textarea"
                           placeholder="Change your password" className="wd-edit-text form-control" style={{marginLeft:"-20px"}}>
                    </input>
                </div>
            </div>



            {/*<div className="row" style={{marginLeft:"30px", marginTop:"20px"}}>*/}
            {/*    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">*/}
            {/*        <p className="col-12" style={{color:"white", marginTop:"5px"}}>Birthday</p>*/}
            {/*    </div>*/}
            {/*    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">*/}
            {/*        <input value={birthday} onChange={handleBirthday} type="textarea"*/}
            {/*               placeholder="Jan 1,1990" className="wd-text-edit form-control" style={{marginLeft:"-20px"}}>*/}
            {/*        </input>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default ChangeProfile;