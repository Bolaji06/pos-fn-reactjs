import React, { useEffect } from "react";
import NavBar from "../../common/navBar";
import PullRequestList from './pullRequestList'

function UserProjects(props) {
    const { getGlobalProjects } = props
    useEffect(() => {
        getGlobalProjects();
    }, [getGlobalProjects])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <PullRequestList />
        </div>
    );
}

export default UserProjects;