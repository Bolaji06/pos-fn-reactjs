import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import PullRequestList from './pullRequestList'

function GlobalPullRequests(props) {
    const { getGlobalPullRequests } = props
    useEffect(() => {
        getGlobalPullRequests();
    }, [getGlobalPullRequests])

    return (
        <div >
            <NavBar />
            <h1>Global Pull Requests</h1>
            <PullRequestList />
        </div>
    );
}

export default GlobalPullRequests;
