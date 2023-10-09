import * as constants from "../../../constants/projects";

const initialState = {
    loading: false,
    error: "",
    branch: {},
    branches: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case constants.GET_BRANCH_SUCCESS:
            return {
                ...state,
                loading: false,
                branch: action.branch,
            }
        case constants.GET_PROJECT_BRANCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                projectId: action.projectId,
                projectBranches: action.projectBranches,
            }
        case constants.GET_GLOBAL_BRANCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                globalBranches: action.globalBranches,
            }
        case constants.CREATE_BRANCH_SUCCESS:
            return {
                ...state,
                loading: false,
                branch: action.branch,
            }

        case constants.EDIT_BRANCH_SUCCESS:
            return {
                ...state,
                loading: false,
                branch: action.branch,
            }

        case constants.ASSIGN_BRANCH_SUCCESS:
            return {
                ...state,
                loading: false,
                branch: action.branch,
            }

        default:
            return state;
    }
}






