import React, { useEffect } from "react";

function ProjectList(props) {
    const { getProjects } = props
    useEffect(() => {
        getProjects();
    }, [getProjects])

    return (
        <div >
            Project List
        </div>
    );
}

export default ProjectList;
