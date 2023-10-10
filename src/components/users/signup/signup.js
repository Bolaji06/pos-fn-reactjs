import React from "react";
import SignupForm from './signupForm'
import { NavLink } from "react-router-dom";

const Signup = (props) => {

    return (
        <div>
            <h1><NavLink to="/">SIGNUP</NavLink></h1>
            <SignupForm {...props} />
            <div>OR</div>
            <NavLink to="/login" >LOGIN</NavLink>
        </div>
    );
}

export default Signup;
