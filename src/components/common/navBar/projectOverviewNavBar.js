import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ projectId }) => {
    return <div style={{ display: 'flex' }}>
        <NavLink to="/"> <h6 style={{ margin: 10 }}>POS</h6></NavLink>
        <NavLink to={`/pullRequests/project/${projectId}`}> <h6 style={{ margin: 10 }}>PULL REQUESTS</h6></NavLink>
        {/* <NavLink to="/login"> <h6 style={{ margin: 10 }}>ISSUES</h6></NavLink>
        <NavLink to="/projects"> <h6 style={{ margin: 10 }}>COMMITS</h6></NavLink>
        <NavLink to="/users"> <h6 style={{ margin: 10 }}>CONTRIBUTORS</h6></NavLink> */}
    </div>
}

export default NavBar
