import React from "react";

function IssueList(props) {
    const { issues } = props

    return (
        <div >
            {(issues || []).map(issue => (
                <div key={`key-${issue.id}`} style={{ display: 'flex' }}>
                    <div>Name : {issue.name}</div>

                </div>
            ))}
        </div>
    );
}

export default IssueList;
