import EditUser from "../../../components/users/editUser/editUser";
import { editUser, getUsers, setLoading, signup } from "../../../store/actions/users";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        signup: (userInput) => dispatch(signup(userInput)),
        editUser: (input) => dispatch(editUser(input))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);