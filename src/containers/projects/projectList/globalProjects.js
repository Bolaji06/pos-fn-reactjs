import GlobalProjects from "../../../components/projects/projectList/globalProjects";
import { getUserProjects, getGlobalProjects, setLoading } from "../../../store/actions/projects";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return {
        ...store,
        globalProjects: store.projects.globalProjects
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUserProjects: () => dispatch(getUserProjects()),
        getGlobalProjects: () => dispatch(getGlobalProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalProjects);
