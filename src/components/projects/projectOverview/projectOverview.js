import React from "react";
import AuthenticatedNavBar from "../../common/navBar/authenticatedNavBar";
import ProjectOverviewNavBar from '../../common/navBar/projectOverviewNavBar'
import { useEffect } from "react";
import { useParams } from "react-router-dom/dist";

function ProjectOverview(props) {
    const { project, getProject } = props
    const { id } = useParams();
    useEffect(() => {
        getProject(id)
    }, [id, getProject])
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AuthenticatedNavBar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div><ProjectOverviewNavBar projectId={id} /></div>
                <div>
                    Project Overview
                    <h6>NAME : {project?.name}</h6>
                    <h6>DESCRIPTION : {project?.description}</h6>
                    <h6>OWNERS :</h6>
                </div>
            </div>
        </div>
    );
}

export default ProjectOverview;
