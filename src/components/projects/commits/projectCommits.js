import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import PullRequestList from './commitList'

function UserProjects(props) {
    const { getProjectCommits } = props
    useEffect(() => {
        getProjectCommits();
    }, [getProjectCommits])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <PullRequestList />
        </div>
    );
}

export default UserProjects;
