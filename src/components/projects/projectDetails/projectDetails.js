import React from "react";
import AuthenticatedNavBar from "../../common/navBar/authenticatedNavBar";
import { useEffect } from "react";
import { useParams } from "react-router-dom/dist";

function ProjectDetails(props) {
    const { project, getProject } = props
    const { id } = useParams();
    useEffect(() => {
        getProject(id)
    }, [])
    return (
        <div >
            <AuthenticatedNavBar />
            ProjectDetails
            <div style={{ display: 'flex' }}>
                <button>USERS</button>
                <button>PULL REQUESTS</button>
            </div>
            <h6>NAME : {project?.name}</h6>
            <h6>DESCRIPTION : {project?.description}</h6>
            <h6>OWNERS :</h6>
        </div>
    );
}

export default ProjectDetails;
