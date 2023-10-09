import * as constants from "../../../constants/projects";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: "LOADING",
        loading,
    };
};

export const getProjectCommits = (projectId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/commits/${projectId}`).then((res) => {
            dispatch({
                type: constants.GET_PROJECT_COMMITS_SUCCESS,
                projectCommits: res.data.projectCommits,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_PROJECT_COMMITS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getGlobalCommits = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/commits`).then((res) => {
            dispatch({
                type: constants.GET_GLOBAL_COMMITS_SUCCESS,
                globalCommits: res.data.globalCommits,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_GLOBAL_COMMITS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getCommit = (commitId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/commits/${commitId}`).then((res) => {
            dispatch({
                type: constants.GET_COMMIT_SUCCESS,
                commit: res.data.commit,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_COMMIT_ERROR, error })
            setLoading(false)
        })
    }
};


export const createCommit = (commitId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/commits/${commitId}`).then((res) => {
            dispatch({
                type: constants.CREATE_COMMIT_SUCCESS,
                commit: res.data.commit,
            });
        }).catch((error) => {
            dispatch({ type: constants.CREATE_COMMIT_ERROR, error })
            setLoading(false)
        })
    }
};


export const editCommit = (commitId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/commits/${commitId}`).then((res) => {
            dispatch({
                type: constants.EDIT_COMMIT_SUCCESS,
                commit: res.data.commit,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.EDIT_COMMIT_ERROR, error })
            setLoading(false)
        })

    }
};


export const AssignCommit = (commitId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/commits/${commitId}`).then((res) => {
            dispatch({
                type: constants.ASSIGN_COMMIT_SUCCESS,
                commit: res.data.commit,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({
                type: constants.ASSIGN_COMMIT_ERROR,
                error
            })
            setLoading(false)
        }
        )

    }
};


export default ({
    getProjectCommits,
    getGlobalCommits,
    getCommit,
    createCommit,
    AssignCommit,
    editCommit
})
