import UserPullRequests from "../../../components/projects/pullRequests/userPullRequests";
import { getUserPullRequests, setLoading } from "../../../store/actions/projects/pullRequests";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, userPullRequests: store.pullRequss.userPullRequests };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUserPullRequests: (userId) => dispatch(getUserPullRequests(userId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPullRequests);
