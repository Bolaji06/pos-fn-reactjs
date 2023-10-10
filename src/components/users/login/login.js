import React from "react";
import LoginForm from './loginForm'
import { NavLink } from "react-router-dom";

const Login = (props) => {
    return (
        <div >
            <h1><NavLink to="/">LOGIN</NavLink></h1>
            <LoginForm {...props} />
            <div>OR</div>
            <NavLink to="/signup" >SIGNUP</NavLink>        </div>
    );
}

export default Login;
