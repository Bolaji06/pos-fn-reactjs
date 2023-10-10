import EditProject from "../../../components/projects/edit/edit";
import { editProject, getProject, setLoading } from "../../../store/actions/projects";
import { getUsers } from '../../../store/actions/users'
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return ({ ...store, project: store.projects.project });
}

export function mapDispatchToProps(dispatch) {
    return {
        editProject: (projectInput, projectId, navigate) => dispatch(editProject(projectInput, projectId, navigate)),
        setLoading: (loading) => dispatch(setLoading(loading)),
        getUsers: () => dispatch(getUsers()),
        getProject: (projectId) => dispatch(getProject(projectId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
