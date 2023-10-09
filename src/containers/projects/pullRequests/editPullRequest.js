import EditPullRequest from "../../../components/projects/pullRequests/editPullRequest";
import { getGlobalProjects, setLoading } from "../../../store/actions/projects";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getGlobalProjects: () => dispatch(getGlobalProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPullRequest);
