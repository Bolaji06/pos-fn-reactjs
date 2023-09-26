import ViewProjects from "../../components/projects/viewProjects";
import { getProjects, setLoading } from "../../store/actions";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getProjects: () => dispatch(getProjects()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProjects);