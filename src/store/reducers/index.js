import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
// import { connectRouter } from 'react-router-redux';

import users from './users';
import projects from './projects'
import payments from './payments'
import home from './home'
import dashboard from './dashboard'
import pullRequests from './projects/pullRequests';


export default combineReducers({
    users,
    projects,
    payments,
    home,
    dashboard,
    pullRequests,
    // router: connectRouter(history),
});
