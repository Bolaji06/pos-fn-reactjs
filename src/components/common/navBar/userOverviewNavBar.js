import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ userId }) => {
    return <div style={{ display: 'flex' }}>
        <NavLink to="/"> <h6 style={{ margin: 10 }}>HOME</h6></NavLink>
        <NavLink to={`/pullRequests/user/${userId}`}> <h6 style={{ margin: 10 }}>PULL REQUESTS</h6></NavLink>
        <NavLink to="/projects"> <h6 style={{ margin: 10 }}>PROJECTS</h6></NavLink>
        <NavLink to="/projects/create"> <h6 style={{ margin: 10 }}>CREATE PROJECT</h6></NavLink>
    </div>
}

export default NavBar
