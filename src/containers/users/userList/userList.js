import UserList from "../../../components/users/userList/userList";
import { getUsers, setLoading } from "../../../store/actions/users";
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
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
