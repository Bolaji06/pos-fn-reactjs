import GlobalBranches from "../../../components/projects/branches/globalBranches";
import { getGlobalBranches, setLoading } from "../../../store/actions/projects/branches";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, globalBranches: store.branches.globalBranches };
}

export function mapDispatchToProps(dispatch) {
    return {
        getGlobalBranches: () => dispatch(getGlobalBranches()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalBranches);
