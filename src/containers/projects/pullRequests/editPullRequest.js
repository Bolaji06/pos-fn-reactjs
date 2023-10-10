import EditPullRequest from "../../../components/projects/pullRequests/editPullRequest";
import { editPullRequest, setLoading } from "../../../store/actions/projects/pullRequests";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, pullRequest: store.pullRequests.pullRequest };
}

export function mapDispatchToProps(dispatch) {
    return {
        editPullRequest: (pullRequestId) => dispatch(editPullRequest(pullRequestId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPullRequest);
