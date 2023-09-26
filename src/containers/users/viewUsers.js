import ViewUsers from "../../components/users/viewUsers";
import { getUsers, setLoading } from "../../store/actions";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    console.log({ store })
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsers),
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers);