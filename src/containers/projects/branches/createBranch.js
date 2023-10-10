import CreateBranch from "../../../components/projects/branches/createBranch";
import { createBranch, getBranch, setLoading } from "../../../store/actions/projects/branches";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, branch: store.branches.branch };
}

export function mapDispatchToProps(dispatch) {
    return {
        createBranch: (branchInput, navigate) => dispatch(createBranch(branchInput, navigate)),
        getBranch: (branchId) => dispatch(getBranch(branchId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBranch);
