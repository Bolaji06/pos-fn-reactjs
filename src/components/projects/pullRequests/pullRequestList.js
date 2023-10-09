import React, { useEffect } from "react";

function ProjectList(props) {
    const { pullRequests } = props

    return (
        <div >
            {(pullRequests || []).map(pullRequest => (
                <div style={{ display: 'flex' }}>
                    <div>Name</div>

                </div>
            ))}
        </div>
    );
}

export default ProjectList;
