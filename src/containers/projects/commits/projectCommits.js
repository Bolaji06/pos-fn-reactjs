import ProjectCommits from "../../../components/projects/commits/projectCommits";
import { getProjectCommits, setLoading } from "../../../store/actions/projects/commits";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, projectCommits: store.commits.projectCommits };
}

export function mapDispatchToProps(dispatch) {
    return {
        getProjectCommits: (projectId) => dispatch(getProjectCommits(projectId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCommits);
