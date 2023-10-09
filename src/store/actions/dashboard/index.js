// import * as constants from "../../constants/users";
// import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: "LOADING",
        loading,
    };
};

export default ({
    setLoading
})
