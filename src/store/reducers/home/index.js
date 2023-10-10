import * as constants from "../../constants/home";

const initialState = {
    loading: false,
    error: "",
};

const homeReducer = (state = initialState, action) => {
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

export default homeReducer
