import GlobalIssues from "../../../components/projects/issues/globalIssues";
import { getGlobalIssues, setLoading } from "../../../store/actions/projects/issues";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, globalIssues: store.issues.globalIssues };
}

export function mapDispatchToProps(dispatch) {
    return {
        getGlobalIssues: () => dispatch(getGlobalIssues()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalIssues);
