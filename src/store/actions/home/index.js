import * as constants from "../../constants/home";

export const setLoading = (loading) => {
    return {
        type: constants.LOADING,
        loading,
    };
};
