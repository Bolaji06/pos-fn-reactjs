import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import CommitList from './commitList'

function UserCommits(props) {
    const { getUserCommits } = props
    useEffect(() => {
        getUserCommits();
    }, [getUserCommits])

    return (
        <div >
            <NavBar />
            <h1>Project Pull Requests</h1>
            <CommitList />
        </div>
    );
}

export default UserCommits;
