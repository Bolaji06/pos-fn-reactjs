import React, { useEffect } from "react";
import AuthenticatedNavBar from "../../common/navBar/authenticatedNavBar";
import ProjectList from './projectList'

function UserProjects(props) {
    const { getGlobalProjects, globalProjects } = props

    useEffect(() => {
        getGlobalProjects();
    }, [getGlobalProjects])

    return (
        <div >
            <AuthenticatedNavBar />
            <h1>Global Projects</h1>
            <ProjectList projects={globalProjects} />
        </div>
    );
}

export default UserProjects;
