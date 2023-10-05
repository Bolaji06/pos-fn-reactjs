import * as constants from "../../constants/users";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: "LOADING",
        loading,
    };
};

export const getUsers = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/users').then((res) => {
            dispatch({
                type: constants.GET_USERS,
                users: res.data.users,
            });
        })
    }
};

export const getProjects = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/projects').then((res) => {
            dispatch({
                type: constants.GET_PROJECTS,
                projects: res.data.projects,
            });
        })
    }
};

export default ({
    getUsers,
    getProjects,
    setLoading,
})
