import Signup from "../../../components/users/signup/signup";
import { getUsers, setLoading, signup } from "../../../store/actions/users";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        signup: (userInput, navigate) => dispatch(signup(userInput, navigate))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);