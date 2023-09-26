import * as constants from "../constants";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: "LOADING",
        loading,
    };
};

export const getUsers = (loading) => {
    axios.get('http://localhost:4000/users').then((res) => {
        console.log({ res });
        return {
            type: constants.GET_USERS,
            res,
        };
    })

};
