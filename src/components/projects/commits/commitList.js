import React from "react";

const CommitList = (props) => {
    const { commits } = props
    return (
        <div >
            {(commits || []).map(commit => (
                <div style={{ display: 'flex' }}>
                    <div>Name</div>

                </div>
            ))}
        </div>
    );
}

export default CommitList;
