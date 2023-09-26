import React, { useEffect } from "react";

function ViewProjects(props) {
    const { getProjects } = props
    useEffect(() => {
        getProjects();
    }, [getProjects])

    return (
        <div >
            View Projects
        </div>
    );
}

export default ViewProjects;
