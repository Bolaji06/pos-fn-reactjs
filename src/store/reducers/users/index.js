import * as constants from "../../constants/users";

const initialState = {
    loading: false,
    error: "",
    user: {},
    users: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case constants.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users,
            }
        case constants.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user,
            }

        case constants.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user,
            }

        case constants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user,
            }

        case constants.EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user,
            }
        default:
            return state;
    }
}


