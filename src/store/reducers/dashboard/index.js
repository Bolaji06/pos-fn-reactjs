import * as constants from "../../constants/dashboard";

const initialState = {
    loading: false,
    error: "",
};

const dashboardReducer = (state = initialState, action) => {
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

export default dashboardReducer
