import * as constants from "../../constants/wallet";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: constants.LOADING,
        loading,
    };
};

export const deposit = (depositInput, navigate) => {
    return (dispatch) => {
        setLoading(true)
        axios.post('http://localhost:4000/deposit', depositInput).then((res) => {
            dispatch({
                type: constants.DEPOSIT_SUCCESS,
                deposit: res.data.deposit,
            });
            setLoading(false)
            navigate(`/deposits/overview/${res.data.deposit.id}`)
        }).catch((error) => {
            dispatch({ type: constants.DEPOSIT_ERROR, error })
            setLoading(false)
        })
    }
};
export const withdraw = (withdrawInput, navigate) => {
    return (dispatch) => {
        setLoading(true)
        axios.post('http://localhost:4000/withdraw', withdrawInput).then((res) => {
            dispatch({
                type: constants.WITHDRAW_SUCCESS,
                withdraw: res.data.withdraw,
            });
            setLoading(false)
            navigate(`/withdraws/overview/${res.data.withdraw.id}`)
        }).catch((error) => {
            dispatch({ type: constants.WITHDRAW_ERROR, error })
            setLoading(false)
        })
    }
};

export const getTransactions = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/transactions').then((res) => {
            dispatch({
                type: constants.GET_TRANSACTIONS_SUCCESS,
                transactions: res.data.transactions,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_TRANSACTIONS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getWithdrawals = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/transactions').then((res) => {
            dispatch({
                type: constants.GET_WITHDRAWALS_SUCCESS,
                transactions: res.data.transactions,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_WITHDRAWALS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getDeposits = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/transactions').then((res) => {
            dispatch({
                type: constants.GET_DEPOSITS_SUCCESS,
                transactions: res.data.transactions,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_DEPOSITS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getCommittedAmmount = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/transactions').then((res) => {
            dispatch({
                type: constants.GET_COMMITTED_AMMOUNT_SUCCESS,
                transactions: res.data.transactions,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_COMMITTED_AMMOUNT_ERROR, error })
            setLoading(false)
        })
    }
};

export const getUnCommittedAmmount = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/transactions').then((res) => {
            dispatch({
                type: constants.GET_UNCOMMITTED_AMMOUNT_SUCCESS,
                transactions: res.data.transactions,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_UNCOMMITTED_AMMOUNT_ERROR, error })
            setLoading(false)
        })
    }
};

export const getTotalAccountBalance = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/transactions').then((res) => {
            dispatch({
                type: constants.GET_TOTAL_ACCOUNT_BALANCE_SUCCESS,
                transactions: res.data.transactions,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_TOTAL_ACCOUNT_BALANCE_ERROR, error })
            setLoading(false)
        })
    }
};