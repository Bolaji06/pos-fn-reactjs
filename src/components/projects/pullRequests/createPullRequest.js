import React, { useEffect } from "react";

function ProjectList(props) {
    const { projects } = props

    return (
        <div >
            {(projects || []).map(project => (
                <div style={{ display: 'flex' }}>
                    <div>Name</div>

                </div>
            ))}
        </div>
    );
}

export default ProjectList;
