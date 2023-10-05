import Withdraw from "../../../components/payments/withdraw/withdraw";
import { setLoading } from "../../store/actions";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);
