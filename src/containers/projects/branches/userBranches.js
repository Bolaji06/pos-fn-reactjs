import UserBranches from "../../../components/projects/branches/userBranches";
import { getUserBranches, setLoading } from "../../../store/actions/projects/branches";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, userBranches: store.branches.userBranches };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUserBranches: () => dispatch(getUserBranches()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBranches);
