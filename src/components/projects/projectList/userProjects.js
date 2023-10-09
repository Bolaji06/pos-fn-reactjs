import React, { useEffect } from "react";
import AuthenticatedNavBar from "../../common/navBar/authenticatedNavBar";
import ProjectList from './projectList'

function UserProjects(props) {
    const { getUserProjects } = props
    useEffect(() => {
        getUserProjects();
    }, [getUserProjects])

    return (
        <div >
            <AuthenticatedNavBar />
            <h1>User Projects</h1>
            <ProjectList />
        </div>
    );
}

export default UserProjects;
