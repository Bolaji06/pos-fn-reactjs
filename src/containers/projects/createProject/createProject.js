import CreateProject from "../../../components/projects/create/create";
import { getProjects, setLoading, createProject } from "../../../store/actions/projects";
import { getUsers } from '../../../store/actions/users'
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
        getProjects: () => dispatch(getProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        createProject: (projectInput) => dispatch(createProject(projectInput))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
