import UserDetails from "../../../components/users/userDetails/userDetails";
import { getUsers, setLoading } from "../../../store/actions/users";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
