import * as constants from "../../constants/users";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: "LOADING",
        loading,
    };
};


export const signup = (input) => {
    return (dispatch) => {
        setLoading(true)
        axios.post('http://localhost:4000/signup', input).then((res) => {
            dispatch({
                type: constants.SIGNUP_SUCCESS,
                user: res.data.user,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.SIGNUP_ERROR, error })
            setLoading(false)
        })
    }
};


export const login = (input) => {
    return (dispatch) => {
        setLoading(true)
        axios.post('http://localhost:4000/login', input).then((res) => {
            dispatch({
                type: constants.LOGIN_SUCCESS,
                user: res.data.user,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.LOGIN_ERROR, error })
        })
    }
};

export const getUsers = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/users').then((res) => {
            dispatch({
                type: constants.GET_USERS_SUCCESS,
                users: res.data.users,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_USERS_ERROR, error })
        })
    }
};

export const getUser = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/users').then((res) => {
            dispatch({
                type: constants.GET_USER_SUCCESS,
                user: res.data.user,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_USER_ERROR, error })
        })
    }
};

export const editUser = (userInput) => {
    return (dispatch) => {
        setLoading(true)
        axios.post('http://localhost:4000/editUser', userInput).then((res) => {
            dispatch({
                type: constants.EDIT_USER_SUCCESS,
                user: res.data.user,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.EDIT_USER_ERROR, error })
            setLoading(false)
        })
    }
};



export default ({
    getUsers,
    setLoading,
    signup,
    login,
    editUser,
    getUser
})
