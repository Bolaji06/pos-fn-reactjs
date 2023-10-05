import * as constants from "../../constants/projects";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: "LOADING",
        loading,
    };
};

export const createProject = (projectInput) => {
    return (dispatch) => {
        setLoading(true)
        axios.post('http://localhost:4000/add-project', projectInput).then((res) => {
            dispatch({
                type: constants.CREATE_PROJECT,
                // users: res.data.users,
            });
            setLoading(false)
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
            setLoading(false)
        })
    }
};

export default ({
    createProject,
    getProjects,
    setLoading,
})
