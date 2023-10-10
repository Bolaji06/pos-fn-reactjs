import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import IssueList from './issueList'

function UserProjects(props) {
    const { getUserIssues } = props
    useEffect(() => {
        getUserIssues();
    }, [getUserIssues])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <IssueList />
        </div>
    );
}

export default UserProjects;
