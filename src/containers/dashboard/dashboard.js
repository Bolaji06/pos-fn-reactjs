import Dashboard from "../../components/dashboard/dashboard";
import { setLoading } from "../../store/actions/dashboard";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
