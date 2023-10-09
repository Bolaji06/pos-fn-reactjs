import React, { useEffect } from "react";
import NavBar from "../../common/navBar";
import CommitList from './commitList'

function UserCommits(props) {
    const { getGlobalProjects } = props
    useEffect(() => {
        getGlobalProjects();
    }, [getGlobalProjects])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <CommitList />
        </div>
    );
}

export default UserCommits;
