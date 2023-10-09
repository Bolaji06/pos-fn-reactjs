import React, { useEffect } from "react";
import NavBar from "../../common/navBar";
import ProjectList from './projectList'

function UserProjects(props) {
    const { getUserProjects } = props
    useEffect(() => {
        getUserProjects();
    }, [getUserProjects])

    return (
        <div >
            <NavBar />
            <h1>User Projects</h1>
            <ProjectList />
        </div>
    );
}

export default UserProjects;
