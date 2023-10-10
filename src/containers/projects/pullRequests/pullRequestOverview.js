import PullRequestOverview from "../../../components/projects/pullRequests/pullRequestOverview";
import { getPullRequest, setLoading } from "../../../store/actions/projects/pullRequests";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, pullRequest: store.pullRequests.pullRequest };
}

export function mapDispatchToProps(dispatch) {
    return {
        getPullRequest: (pullRequestId) => dispatch(getPullRequest(pullRequestId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestOverview);
