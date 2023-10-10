import UserList from "../../../components/users/userList/userList";
import { getUsers, getUser, editUser, setLoading } from "../../../store/actions/users";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return {
        ...store,
        users: store.users.users
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers()),
        getUser: (userId) => dispatch(getUser(userId)),
        editUser: (userId) => dispatch(editUser(userId)),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
