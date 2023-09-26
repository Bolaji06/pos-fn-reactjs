import { combineReducers } from "redux";
import * as constants from "../constants/index";

const initialState = {
    loading: false,
    error: "",
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
