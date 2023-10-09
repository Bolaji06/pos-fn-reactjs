import React, { useEffect } from "react";
import NavBar from "../../common/navBar";
import ProjectList from './projectList'

function UserProjects(props) {
    const { getGlobalProjects, globalProjects } = props

    useEffect(() => {
        getGlobalProjects();
    }, [getGlobalProjects])

    return (
        <div >
            <NavBar />
            <h1>Global Projects</h1>
            <ProjectList projects={globalProjects} />
        </div>
    );
}

export default UserProjects;
