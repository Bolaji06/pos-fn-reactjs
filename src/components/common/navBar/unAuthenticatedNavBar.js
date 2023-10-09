import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return <div style={{ display: 'flex' }}>
        <NavLink to="/"> <h6 style={{ margin: 10 }}>POS</h6></NavLink>
        <NavLink to="/signup"> <h6 style={{ margin: 10 }}>SIGNUP</h6></NavLink>
        <NavLink to="/login"> <h6 style={{ margin: 10 }}>LOGIN</h6></NavLink>
    </div>
}

export default NavBar
