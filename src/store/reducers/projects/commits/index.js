import * as constants from "../../../constants/projects";

const initialState = {
    loading: false,
    error: "",
    commit: {},
    commits: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case constants.GET_COMMIT_SUCCESS:
            return {
                ...state,
                loading: false,
                commit: action.commit,
            }
        case constants.GET_PROJECT_COMMITS_SUCCESS:
            return {
                ...state,
                loading: false,
                projectId: action.projectId,
                projectCommits: action.projectCommits,
            }
        case constants.GET_GLOBAL_COMMITS_SUCCESS:
            return {
                ...state,
                loading: false,
                globalCommits: action.globalCommits,
            }
        case constants.CREATE_COMMIT_SUCCESS:
            return {
                ...state,
                loading: false,
                commit: action.commit,
            }

        case constants.EDIT_COMMIT_SUCCESS:
            return {
                ...state,
                loading: false,
                commit: action.commit,
            }

        case constants.ASSIGN_COMMIT_SUCCESS:
            return {
                ...state,
                loading: false,
                commit: action.commit,
            }

        default:
            return state;
    }
}






