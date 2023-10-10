import Wallet from "../../components/wallet/wallet";
import {
    setLoading,
    deposit,
    withdraw,
    getCommittedAmmount,
    getDeposits,
    getTotalAccountBalance,
    getTransactions,
    getUnCommittedAmmount,
    getWithdrawals
} from "../../store/actions/wallet";
import { connect } from "react-redux";

export function mapStateToProps(store) {
    return store;
}

export function mapDispatchToProps(dispatch) {
    return {
        deposit: () => dispatch(deposit()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        withdraw: () => dispatch(withdraw()),
        getCommittedAmmount: () => dispatch(getCommittedAmmount()),
        getDeposits: () => dispatch(getDeposits()),
        getTotalAccountBalance: () => dispatch(getTotalAccountBalance()),
        getTransactions: () => dispatch(getTransactions()),
        getUnCommittedAmmount: () => dispatch(getUnCommittedAmmount()),
        getWithdrawals: () => dispatch(getWithdrawals())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
