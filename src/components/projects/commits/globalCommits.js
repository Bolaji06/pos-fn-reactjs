import React, { useEffect } from "react";
import NavBar from "../../common/navBar";
import PullRequestList from './commitList'

function GlobalPullRequests(props) {
    const { getGlobalProjects } = props
    useEffect(() => {
        getGlobalProjects();
    }, [getGlobalProjects])

    return (
        <div >
            <NavBar />
            <h1>Global Pull Requests</h1>
            <PullRequestList />
        </div>
    );
}

export default GlobalPullRequests;
