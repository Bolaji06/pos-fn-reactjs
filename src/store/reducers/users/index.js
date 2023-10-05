import * as constants from "../../constants/projects";

const initialState = {
    loading: false,
    error: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case constants.GET_USERS:
            return {
                ...state,
                loading: false,
                users: action.users,
            }
        default:
            return state;
    }
}


