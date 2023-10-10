import CreatePullRequest from "../../../components/projects/pullRequests/createPullRequest";
import { createPullRequest, setLoading } from "../../../store/actions/projects/pullRequests";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        createPullRequest: () => dispatch(createPullRequest()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePullRequest);
