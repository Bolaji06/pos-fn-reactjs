import ProjectDetails from "../../../components/projects/projectDetails/projectDetails";
import { getUserProjects, setLoading } from "../../../store/actions/projects";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getUserProjects: () => dispatch(getUserProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);