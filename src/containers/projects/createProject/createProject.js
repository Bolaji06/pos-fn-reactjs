import CreateProject from "../../../components/projects/create/create";
import { getUserProjects, getGlobalProjects, setLoading, createProject } from "../../../store/actions/projects";
import { getUsers } from '../../../store/actions/users'
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return ({ ...store, project: store.projects.project });
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
        getUserProjects: () => dispatch(getUserProjects()),
        getGlobalProjects: () => dispatch(getGlobalProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        createProject: (projectInput, navigate) => dispatch(createProject(projectInput, navigate))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
