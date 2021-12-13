import React, {useState} from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";


const Login = ({setLoginUser}) => {

    const dispatch = useDispatch();

    const history=useNavigate();
    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login=()=>{
        axios.post("http://localhost:4001/login",user)
            .then(res=>{
                alert(res.data.message)
                // setLoginUser(res.data.user)
                history("/")
            })

        dispatch({
            type: 'logged-in'
        })
    }

    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" placeholder="Enter your Email" name="email" value={user.email} onChange={handleChange}></input>
            <input type="text" placeholder="Enter your Password" name="password" value={user.password} onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>history("/register")}>Register</div>
        </div>
    )
}

export default Login;