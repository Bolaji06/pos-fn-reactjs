import ProjectDetails from "../../../components/projects/projectDetails/projectDetails";
import { getUserProjects, setLoading, getProject } from "../../../store/actions/projects";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return ({ ...store, project: store.projects.project });
}

export function mapDispatchToProps(dispatch) {
    return {
        getUserProjects: () => dispatch(getUserProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        getProject: (projectId) => dispatch(getProject(projectId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);