import * as constants from "../../../constants/projects";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: constants.LOADING,
        loading,
    };
};

export const getProjectPullRequests = (projectId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/pullRequests/${projectId}`).then((res) => {
            dispatch({
                type: constants.GET_PROJECT_PULL_REQUESTS_SUCCESS,
                projectPullRequests: res.data.projectPullRequests,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_PROJECT_PULL_REQUESTS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getUserPullRequests = (userId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/pullRequests/${userId}`).then((res) => {
            dispatch({
                type: constants.GET_USER_PULL_REQUESTS_SUCCESS,
                userPullRequests: res.data.userPullRequests,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_USER_PULL_REQUESTS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getGlobalPullRequests = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/pullRequests`).then((res) => {
            dispatch({
                type: constants.GET_GLOBAL_PULL_REQUESTS_SUCCESS,
                globalPullRequests: res.data.globalPullRequests,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_GLOBAL_PULL_REQUESTS_ERROR, error })
            setLoading(false)
        })
    }
};

export const getPullRequest = (pullRequestId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/pullRequests/${pullRequestId}`).then((res) => {
            dispatch({
                type: constants.GET_PULL_REQUEST_SUCCESS,
                pullRequest: res.data.pullRequest,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_PULL_REQUEST_ERROR, error })
            setLoading(false)
        })
    }
};


export const createPullRequest = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/pullRequests`).then((res) => {
            dispatch({
                type: constants.CREATE_PULL_REQUEST_SUCCESS,
                pullRequest: res.data.pullRequest,
            });
        }).catch((error) => {
            dispatch({ type: constants.CREATE_PULL_REQUEST_ERROR, error })
            setLoading(false)
        })
    }
};


export const editPullRequest = (pullRequestId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/pullRequests/${pullRequestId}`).then((res) => {
            dispatch({
                type: constants.EDIT_PULL_REQUEST_SUCCESS,
                pullRequest: res.data.pullRequest,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.EDIT_PULL_REQUEST_ERROR, error })
            setLoading(false)
        })

    }
};


export const AssignPullRequest = (pullRequestId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/pullRequests/${pullRequestId}`).then((res) => {
            dispatch({
                type: constants.ASSIGN_PULL_REQUEST_SUCCESS,
                pullRequest: res.data.pullRequest,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({
                type: constants.ASSIGN_PULL_REQUEST_ERROR,
                error
            })
            setLoading(false)
        }
        )

    }
};

