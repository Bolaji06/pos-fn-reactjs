import EditBranch from "../../../components/projects/branches/editBranch";
import { editBranch, getBranch, setLoading } from "../../../store/actions/projects/branches";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, branch: store.branches.branch };
}

export function mapDispatchToProps(dispatch) {
    return {
        editBranch: (branchInput, branchId, navigate) => dispatch(editBranch(branchInput, branchId, navigate)),
        getBranch: (branchId) => dispatch(getBranch(branchId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBranch);
