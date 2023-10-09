import * as constants from "../../../constants/projects";

const initialState = {
    loading: false,
    error: "",
    issue: {},
    issues: []
};

const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case constants.GET_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issue: action.issue,
            }
        case constants.GET_PROJECT_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                projectId: action.projectId,
                projectIssues: action.projectIssues,
            }
        case constants.GET_GLOBAL_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                globalIssues: action.globalIssues,
            }
        case constants.CREATE_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issue: action.issue,
            }

        case constants.EDIT_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issue: action.issue,
            }

        case constants.ASSIGN_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issue: action.issue,
            }

        default:
            return state;
    }
}

export default issueReducer
