import React, { useEffect } from "react";
import NavBar from "../../common/navBar";
import IssueList from './issueList'

function GlobalIssues(props) {
    const { getGlobalProjects } = props
    useEffect(() => {
        getGlobalProjects();
    }, [getGlobalProjects])

    return (
        <div >
            <NavBar />
            <h1>Global Issues</h1>
            <IssueList />
        </div>
    );
}

export default GlobalIssues;
