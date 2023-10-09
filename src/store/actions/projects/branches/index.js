import * as constants from "../../../constants/projects";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: constants.LOADING,
        loading,
    };
};

export const getProjectBranches = (projectId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/branches/${projectId}`).then((res) => {
            dispatch({
                type: constants.GET_PROJECT_BRANCHES_SUCCESS,
                projectBranches: res.data.projectBranches,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_PROJECT_BRANCHES_ERROR, error })
            setLoading(false)
        })
    }
};

export const getUserBranches = (userId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/branches/${userId}`).then((res) => {
            dispatch({
                type: constants.GET_USER_BRANCHES_SUCCESS,
                userBranches: res.data.userBranches,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_USER_BRANCHES_ERROR, error })
            setLoading(false)
        })
    }
};

export const getGlobalBranches = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/branches`).then((res) => {
            dispatch({
                type: constants.GET_GLOBAL_BRANCHES_SUCCESS,
                globalBranches: res.data.globalBranches,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_GLOBAL_BRANCHES_ERROR, error })
            setLoading(false)
        })
    }
};

export const getBranch = (branchId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/branches/${branchId}`).then((res) => {
            dispatch({
                type: constants.GET_BRANCH_SUCCESS,
                branch: res.data.branch,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_BRANCH_ERROR, error })
            setLoading(false)
        })
    }
};


export const createBranch = (branchId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/branches/${branchId}`).then((res) => {
            dispatch({
                type: constants.CREATE_BRANCH_SUCCESS,
                branch: res.data.branch,
            });
        }).catch((error) => {
            dispatch({ type: constants.CREATE_BRANCH_ERROR, error })
            setLoading(false)
        })
    }
};


export const editBranch = (branchId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/branches/${branchId}`).then((res) => {
            dispatch({
                type: constants.EDIT_BRANCH_SUCCESS,
                branch: res.data.branch,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.EDIT_BRANCH_ERROR, error })
            setLoading(false)
        })

    }
};


export const AssignBranch = (branchId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/branches/${branchId}`).then((res) => {
            dispatch({
                type: constants.ASSIGN_BRANCH_SUCCESS,
                branch: res.data.branch,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({
                type: constants.ASSIGN_BRANCH_ERROR,
                error
            })
            setLoading(false)
        }
        )

    }
};
