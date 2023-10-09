import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import IssueList from './issueList'

function UserProjects(props) {
    const { getProjectIssues } = props
    useEffect(() => {
        getProjectIssues();
    }, [getProjectIssues])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <IssueList />
        </div>
    );
}

export default UserProjects;
