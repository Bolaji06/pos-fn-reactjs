import GlobalCommits from "../../../components/projects/commits/globalCommits";
import { getGlobalCommits, setLoading } from "../../../store/actions/projects/commits";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return { ...store, globalCommits: store.commits.globalCommits };
}

export function mapDispatchToProps(dispatch) {
    return {
        getGlobalCommits: () => dispatch(getGlobalCommits()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalCommits);
