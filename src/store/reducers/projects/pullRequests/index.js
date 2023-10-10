import * as constants from "../../../constants/projects";

const initialState = {
    loading: false,
    error: "",
    pullRequest: {},
    pullRequests: []
};

const pullRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case constants.GET_PULL_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                pullRequest: action.pullRequest,
            }
        case constants.GET_PROJECT_PULL_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projectId: action.projectId,
                projectPullRequests: action.projectPullRequests,
            }
        case constants.GET_GLOBAL_PULL_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                globalPullRequests: action.globalPullRequests,
            }
        case constants.CREATE_PULL_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                pullRequest: action.pullRequest,
            }

        case constants.EDIT_PULL_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                pullRequest: action.pullRequest,
            }

        case constants.ASSIGN_PULL_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                pullRequest: action.pullRequest,
            }

        default:
            return state;
    }
}

export default pullRequestReducer
