import CreateCommit from "../../../components/projects/commits/createCommit";
import { createCommit, setLoading } from "../../../store/actions/projects/commits";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, commit: store.commits.commit };
}

export function mapDispatchToProps(dispatch) {
    return {
        createCommit: (commitInput, navigate) => dispatch(createCommit(commitInput, navigate)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommit);
