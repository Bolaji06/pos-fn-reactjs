import EditIssue from "../../../components/projects/issues/editIssue";
import { editIssue, setLoading } from "../../../store/actions/projects/issues";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        editIssue: (issueId) => dispatch(editIssue(issueId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditIssue);
