import React, { useEffect } from "react";
import NavBar from "../../common/navBar";
import BranchList from './branchList'

function GlobalBranches(props) {
    const { getGlobalProjects } = props
    useEffect(() => {
        getGlobalProjects();
    }, [getGlobalProjects])

    return (
        <div >
            <NavBar />
            <h1>Global Branches</h1>
            <BranchList />
        </div>
    );
}

export default GlobalBranches;
