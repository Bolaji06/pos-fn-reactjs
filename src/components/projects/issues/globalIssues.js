import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import IssueList from './issueList'

function GlobalIssues(props) {
    const { getGlobalIssues } = props
    useEffect(() => {
        getGlobalIssues();
    }, [getGlobalIssues])

    return (
        <div >
            <NavBar />
            <h1>Global Issues</h1>
            <IssueList />
        </div>
    );
}

export default GlobalIssues;
