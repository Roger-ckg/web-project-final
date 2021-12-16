import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./login.css";
// import axios from "axios";
import {useDispatch} from "react-redux";

const API_URL = 'http://localhost:4001/api';
const Login = ({setLoginUser}) => {

    const dispatch = useDispatch();


    const [user,setUser]=useState({
        username:"",
        password:""
    })

    // const handleChange=(e)=>{
    //     const {name,value}=e.target
    //     setUser({
    //         ...user,
    //         [name]:value
    //     })
    // }

    const navigate = useNavigate();

    const login = () => {
        fetch(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            if (response.status === 403) {
                alert("Cannot find username. Please register.")
                navigate("/login")
            } else {
                navigate("/profile")
                window.location.reload()
            }
        });
        //
        // dispatch({
        //     type: 'logged-in',
        //     username: user.username
        // })
    }

    // const loginFail = () => {
    //     console.log("login fail!");
    // }
    // const login=()=>{
    //     axios.post("http://localhost:4001/login",user)
    //         .then(res=>{
    //             //alert(res.data.message)
    //             // setLoginUser(res.data.user)
    //             //navigate to profile
    //             history("/profile")
    //         })
    //
    //     dispatch({
    //         type: 'logged-in'
    //     })
    // }

    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" placeholder="Enter your Username" name="username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}></input>
            <input type="text" placeholder="Enter your Password" name="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")}>Register</div>
        </div>
    )
}

export default Login;