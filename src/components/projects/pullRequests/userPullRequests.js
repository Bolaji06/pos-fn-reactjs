import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import PullRequestList from './pullRequestList'

function UserProjects(props) {
    const { getUserPullRequests } = props
    useEffect(() => {
        getUserPullRequests();
    }, [getUserPullRequests])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <PullRequestList />
        </div>
    );
}

export default UserProjects;
