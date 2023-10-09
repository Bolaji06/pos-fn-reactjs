import UserCommits from "../../../components/projects/commits/userCommits";
import { getUserCommits, setLoading } from "../../../store/actions/projects/commits";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, userCommits: store.commits.userCommits };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUserCommits: (userId) => dispatch(getUserCommits(userId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCommits);
