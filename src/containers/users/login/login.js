import Login from "../../../components/users/login/login";
import { getUsers, setLoading, login } from "../../../store/actions/users";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        login: (input) => dispatch(login(input))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);