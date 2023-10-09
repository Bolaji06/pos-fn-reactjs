import EditProject from "../../../components/projects/edit/edit";
import { getGlobalProjects, setLoading } from "../../../store/actions/projects";
import { getUsers } from '../../../store/actions/users'
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return ({ ...store });
}

export function mapDispatchToProps(dispatch) {
    return {
        getGlobalProjects: () => dispatch(getGlobalProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        getUsers: () => dispatch(getUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
