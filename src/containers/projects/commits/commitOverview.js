import CommitOverview from "../../../components/projects/commits/commitOverview";
import { editCommit, getCommit, setLoading } from "../../../store/actions/projects/commits";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, commit: store.commits.commit };
}

export function mapDispatchToProps(dispatch) {
    return {
        editCommit: (commitInput, commitId, navigate) => dispatch(editCommit(commitInput, commitId, navigate)),
        getCommit: (commitId) => dispatch(getCommit(commitId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommitOverview);
