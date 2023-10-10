import ProjectIssues from "../../../components/projects/issues/projectIssues";
import { getProjectIssues, setLoading } from "../../../store/actions/projects/issues";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, projectIssues: store.issues.projectIssues };
}

export function mapDispatchToProps(dispatch) {
    return {
        getProjectIssues: (projectId) => dispatch(getProjectIssues(projectId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIssues);
