import * as constants from "../../constants/projects";

const initialState = {
    loading: false,
    error: "",
    project: {
        id: 1,
        name: 'EvenHelp',
        description: 'POS',
        link: 'github.com'
    },
    projects: [
        {
            id: 1,
            name: 'EvenHelp',
            description: 'POS',
            link: 'github.com'
        }
    ],
    globalProjects: [
        {
            id: 2,
            name: 'EvenHelp',
            description: 'POS',
            link: 'github.com'
        }
    ]
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case constants.GET_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                project: action.project,
            }
        case constants.GET_USER_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projectId: action.projectId,
                projectPullRequests: action.projectPullRequests,
            }
        case constants.GET_GLOBAL_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                globalPullRequests: action.globalPullRequests,
            }
        case constants.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                project: action.project,
            }

        case constants.EDIT_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                project: action.project,
            }

        default:
            return state;
    }
}

export default projectReducer
