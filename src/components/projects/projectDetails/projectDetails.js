import React from "react";
import NavBar from "../../common/navBar";

function ProjectDetails() {
    return (
        <div >
            <NavBar />
            ProjectDetails
            <div style={{ display: 'flex' }}>
                <button>USERS</button>
                <button>PULL REQUESTS</button>
            </div>
            <h6>NAME :</h6>
            <h6>DESCRIPTION :</h6>
            <h6>OWNERS :</h6>
        </div>
    );
}

export default ProjectDetails;
