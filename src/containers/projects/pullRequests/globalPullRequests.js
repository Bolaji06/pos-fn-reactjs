import GlobalPullRequests from "../../../components/projects/pullRequests/globalPullRequests";
import { getGlobalPullRequests, setLoading } from "../../../store/actions/projects/pullRequests";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, globalPullRequests: store.pullRequests.globalPullRequests };
}

export function mapDispatchToProps(dispatch) {
    return {
        getGlobalPullRequests: () => dispatch(getGlobalPullRequests()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalPullRequests);
