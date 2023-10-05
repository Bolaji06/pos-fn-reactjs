import Deposit from "../../../components/payments/deposit/deposit";
import { setLoading } from "../../../store/actions/payments/";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        setLoading: (loading) => dispatch(setLoading(loading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
