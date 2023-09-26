import { combineReducers } from "redux";
import * as constants from "../constants/index";

const initialState = {
    loading: false,
    error: "",
};

export function userReducer(state = initialState, action) {
    console.log({ action });
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

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
