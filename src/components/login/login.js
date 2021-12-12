import React, {useState} from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = ({setLoginUser}) => {

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
        axios.post("http://localhost:9002/login",user)
            .then(res=>{
                alert(res.data.message)
                // setLoginUser(res.data.user)
                history("/")
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