import { combineReducers } from 'redux';

import users from './users';
import projects from './projects'
import wallet from './wallet'
import home from './home'
import dashboard from './dashboard'
import pullRequests from './projects/pullRequests';
import branches from './projects/branches';
import issues from './projects/issues';
import commits from './projects/commits';

export default combineReducers({
    users,
    projects,
    wallet,
    home,
    dashboard,
    pullRequests,
    branches,
    issues,
    commits,
});
