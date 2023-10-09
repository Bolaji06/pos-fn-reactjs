import React, { useEffect } from "react";
import NavBar from "../../common/navBar";
import IssueList from './issueList'

function UserProjects(props) {
    const { getGlobalProjects } = props
    useEffect(() => {
        getGlobalProjects();
    }, [getGlobalProjects])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <IssueList />
        </div>
    );
}

export default UserProjects;
