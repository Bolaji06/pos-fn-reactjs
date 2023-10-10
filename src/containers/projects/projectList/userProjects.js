import UserProjects from "../../../components/projects/projectList/userProjects";
import { getGlobalProjects, getUserProjects, setLoading } from "../../../store/actions/projects";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return {
        ...store,
        projects: store.projects.projects,
        userProjects: store.projects.userProjects
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getGlobalProjects: () => dispatch(getGlobalProjects()),
        getUserProjects: () => dispatch(getUserProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);
