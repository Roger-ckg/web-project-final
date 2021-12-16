import React, { useState } from "react";
import "./register.css";
// import axios from "axios";
import {useNavigate} from 'react-router-dom';

const API_URL = 'http://localhost:4001/api';

const Register = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
        // reEnterPassword:""
    })

    // const handleChange=(e)=>{
    //     const {name,value}=e.target
    //     setUser({
    //         ...user,
    //         [name]:value
    //     })
    // }
    const register = () => {
        fetch(`${API_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            status => navigate('/profile')
        );
    };
    // const register=()=>{
    //     const {name,email,password,reEnterPassword}=user
    //     if (name && email && password && (password===reEnterPassword)){
    //         axios.post("http://localhost:4001/register",user)
    //             .then(res=>{
    //                 alert(res.data.message)
    //                 //navigate to profile
    //                 // history("/profile")
    //             }).then(status => {
    //             history('/profile')
    //         });
    //     }else{
    //         alert("invalid input")
    //     }
    // }

    return (
        <div className="register">
            {console.log("user",user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.username} placeholder="Your Name" onChange={(e) => setUser({...user, username: e.target.value})}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={(e) => setUser({...user, email: e.target.value})}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={(e) => setUser({...user, password: e.target.value})}></input>
            {/*<input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>*/}
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/login")}>Login</div>
        </div>
    )
}

export default Register;