import React from "react";

function ProjectList(props) {
    const { branches } = props

    return (
        <div >
            {(branches || []).map(branch => (
                <div style={{ display: 'flex' }}>
                    <div>Name</div>

                </div>
            ))}
        </div>
    );
}

export default ProjectList;
