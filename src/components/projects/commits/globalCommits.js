import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import PullRequestList from './commitList'

function GlobalPullRequests(props) {
    const { getGlobalCommits } = props
    useEffect(() => {
        getGlobalCommits();
    }, [getGlobalCommits])

    return (
        <div >
            <NavBar />
            <h1>Global Pull Requests</h1>
            <PullRequestList />
        </div>
    );
}

export default GlobalPullRequests;
