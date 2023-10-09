import UserIssues from "../../../components/projects/issues/userIssues";
import { getUserIssues, setLoading } from "../../../store/actions/projects/issues";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, userIssues: store.issues.userIssues };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUserIssues: (userId) => dispatch(getUserIssues(userId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIssues);
