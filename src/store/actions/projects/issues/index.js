import * as constants from "../../../constants/projects";
import axios from "axios";

export const setLoading = (loading) => {
    return {
        type: "LOADING",
        loading,
    };
};

export const getProjectIssues = (projectId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/issues/${projectId}`).then((res) => {
            dispatch({
                type: constants.GET_PROJECT_ISSUES_SUCCESS,
                projectIssues: res.data.projectIssues,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.GET_PROJECT_ISSUES_ERROR, error })
            setLoading(false)
        })
    }
};

export const getGlobalIssues = () => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/issues`).then((res) => {
            dispatch({
                type: constants.GET_GLOBAL_ISSUES_SUCCESS,
                globalIssues: res.data.globalIssues,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_GLOBAL_ISSUES_ERROR, error })
            setLoading(false)
        })
    }
};

export const getIssue = (issueId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/issues/${issueId}`).then((res) => {
            dispatch({
                type: constants.GET_ISSUE_SUCCESS,
                issue: res.data.issue,
            });
        }).catch((error) => {
            dispatch({ type: constants.GET_ISSUE_ERROR, error })
            setLoading(false)
        })
    }
};


export const createIssue = (issueId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/issues/${issueId}`).then((res) => {
            dispatch({
                type: constants.CREATE_ISSUE_SUCCESS,
                issue: res.data.issue,
            });
        }).catch((error) => {
            dispatch({ type: constants.CREATE_ISSUE_ERROR, error })
            setLoading(false)
        })
    }
};


export const editIssue = (issueId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/issues/${issueId}`).then((res) => {
            dispatch({
                type: constants.EDIT_ISSUE_SUCCESS,
                issue: res.data.issue,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({ type: constants.EDIT_ISSUE_ERROR, error })
            setLoading(false)
        })

    }
};


export const AssignIssue = (issueId) => {
    return (dispatch) => {
        setLoading(true)
        axios.get(`http://localhost:4000/issues/${issueId}`).then((res) => {
            dispatch({
                type: constants.ASSIGN_ISSUE_SUCCESS,
                issue: res.data.issue,
            });
            setLoading(false)
        }).catch((error) => {
            dispatch({
                type: constants.ASSIGN_ISSUE_ERROR,
                error
            })
            setLoading(false)
        }
        )

    }
};


export default ({
    getProjectIssues,
    getGlobalIssues,
    getIssue,
    createIssue,
    AssignIssue,
    editIssue
})
