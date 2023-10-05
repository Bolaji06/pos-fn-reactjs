import { combineReducers } from 'redux';

import users from './users';
import projects from './projects'
import payments from './payments'
import home from './home'
import dashboard from './dashboard'

export default combineReducers({
    users,
    projects,
    payments,
    home,
    dashboard,
});
