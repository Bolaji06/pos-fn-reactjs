import ProjectPullRequests from "../../../components/projects/pullRequests/projectPullRequests";
import { getProjectPullRequests, setLoading } from "../../../store/actions/projects/pullRequests";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, projectPullRequests: store.pullRequests.projectPullRequests };
}

export function mapDispatchToProps(dispatch) {
    return {
        getProjectPullRequests: (projectId) => dispatch(getProjectPullRequests(projectId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPullRequests);
