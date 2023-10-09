import * as constants from "../../constants/projects";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: "LOADING",
        loading,
    };
};

export const createProject = (projectInput, navigate) => {
    return (dispatch) => {
        setLoading(true)
        axios.post('http://localhost:4000/add-project', projectInput).then((res) => {
            dispatch({
                type: constants.CREATE_PROJECT_SUCCESS,
                project: res.data.project,
            });
            setLoading(false)
            navigate(`/projects/overview/${res.data.project.id}`)
        }).catch((error) => {
            dispatch({ type: constants.CREATE_PROJECT_ERROR, error })
            setLoading(false)
        })
    }
};

export const editProject = (projectInput) => {
    return (dispatch) => {
        setLoading(true)
        axios.post('http://localhost:4000/edit-project', projectInput).then((res) => {
            dispatch({
                type: constants.EDIT_PROJECT_SUCCESS,
                project: res.data.project,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.EDIT_PROJECT_ERROR, error })
            setLoading(false)
        })
    }
};

// Owner's project
export const getUserProjects = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/projects').then((res) => {
            dispatch({
                type: constants.GET_USER_PROJECTS_SUCCESS,
                userProjects: res.data.userProjects,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_USER_PROJECTS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getProject = (projectId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/projects/${projectId}`).then((res) => {
            dispatch({
                type: constants.GET_PROJECT_SUCCESS,
                project: res.data.project,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_PROJECT_ERROR, error })
            setLoading(false)
        })
    }
};

export const getGlobalProjects = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get('http://localhost:4000/projects').then((res) => {
            dispatch({
                type: constants.GET_GLOBAL_PROJECTS_SUCCESS,
                globalProjects: res.data.globalProjects,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_GLOBAL_PROJECTS_ERROR, error })
            setLoading(false)
        })
    }
};
export default ({
    createProject,
    getUserProjects,
    setLoading,
    editProject,
    getGlobalProjects
})
