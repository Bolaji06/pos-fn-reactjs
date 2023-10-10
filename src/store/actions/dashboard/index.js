import * as constants from "../../constants/dashboard";

export const setLoading = (loading) => {
    return {
        type: constants.LOADING,
        loading,
    };
};
