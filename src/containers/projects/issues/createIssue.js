import CreateIssue from "../../../components/projects/issues/createIssue";
import { createIssue, setLoading } from "../../../store/actions/projects/issues";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        createIssue: (issueInput) => dispatch(createIssue(issueInput)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateIssue);
