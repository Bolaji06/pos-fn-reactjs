import ProjectBranches from "../../../components/projects/branches/projectBranches";
import { getProjectBranches, setLoading } from "../../../store/actions/projects/branches";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, ProjectBranches: store.branches.ProjectBranches };
}

export function mapDispatchToProps(dispatch) {
    return {
        getProjectBranches: (projectId) => dispatch(getProjectBranches(projectId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBranches);
