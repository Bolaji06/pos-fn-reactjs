import IssueOverview from "../../../components/projects/issues/issueOverview";
import { getIssue, setLoading } from "../../../store/actions/projects/issues";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, issue: store.issues.issue };
}

export function mapDispatchToProps(dispatch) {
    return {
        getIssue: (issueId) => dispatch(getIssue(issueId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueOverview);
