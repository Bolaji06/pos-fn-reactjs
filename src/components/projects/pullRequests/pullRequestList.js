import React from "react";

function ProjectList(props) {
    const { pullRequests } = props

    return (
        <div >
            {(pullRequests || []).map(pullRequest => (
                <div style={{ display: 'flex' }}>
                    <div>Name : {pullRequest.name}</div>

                </div>
            ))}
        </div>
    );
}

export default ProjectList;
