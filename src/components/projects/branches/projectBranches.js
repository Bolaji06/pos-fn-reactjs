import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import PullRequestList from './branchList'

function UserProjects(props) {
    const { getProjectBranches } = props
    useEffect(() => {
        getProjectBranches();
    }, [getProjectBranches])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <PullRequestList />
        </div>
    );
}

export default UserProjects;
