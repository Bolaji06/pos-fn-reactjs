import React, { useEffect } from "react";
import NavBar from "../../common/navBar/authenticatedNavBar";
import BranchList from './branchList'

function GlobalBranches(props) {
    const { getGlobalBranches } = props
    useEffect(() => {
        getGlobalBranches();
    }, [getGlobalBranches])

    return (
        <div >
            <NavBar />
            <h1>Global Branches</h1>
            <BranchList />
        </div>
    );
}

export default GlobalBranches;
