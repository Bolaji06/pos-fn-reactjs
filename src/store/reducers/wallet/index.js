import * as constants from "../../constants/wallet";

const initialState = {
    loading: false,
    error: "",
};

const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case constants.GET_DEPOSITS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users,
            }
        case constants.GET_WITHDRAWALS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users,
            }
        case constants.DEPOSIT_SUCCESS:
            return {
                ...state,
                loading: false,
                totalAccountBalance: action.totalAccountBalance,
            }
        case constants.WITHDRAW_SUCCESS:
            return {
                ...state,
                loading: false,
                totalAccountBalance: action.totalAccountBalance,
            }
        case constants.GET_COMMITTED_AMMOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                committedAmmount: action.committedAmmount,
            }
        case constants.GET_UNCOMMITTED_AMMOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                uncommittedAmmount: action.uncommittedAmmount,
            }
        case constants.GET_TOTAL_ACCOUNT_BALANCE_SUCCESS:
            return {
                ...state,
                loading: false,
                totalAccountBalance: action.totalAccountBalance,
            }
        case constants.GET_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: action.transactions,
            }
        default:
            return state;
    }
}
export default walletReducer
