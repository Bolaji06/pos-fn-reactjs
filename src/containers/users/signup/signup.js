import Signup from "../../../components/users/signup/signup";
import { getUsers, setLoading, createUser } from "../../../store/actions/users";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        createUser: (userInput) => dispatch(createUser(userInput))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);