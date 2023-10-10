import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ projectId }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NavLink to="/dashboard"> <h6 style={{ margin: 10 }}>POS</h6></NavLink>
            <NavLink to={`/pullRequests/project/${projectId}`}> <h6 style={{ margin: 10 }}>PULL REQUESTS</h6></NavLink>
            <NavLink to={`/commits/project/${projectId}`}> <h6 style={{ margin: 10 }}>COMMITS</h6></NavLink>
            <NavLink to={`/issues/project/${projectId}`}> <h6 style={{ margin: 10 }}>ISSUES</h6></NavLink>
            <NavLink to={`/branches/project/${projectId}`}> <h6 style={{ margin: 10 }}>BRANCHES</h6></NavLink>
        </div>)
}

export default NavBar
