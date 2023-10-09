import Home from '../containers/home/home'

import Dashboard from '../containers/dashboard/dashboard'

import Wallet from '../containers/wallet/wallet'
import withdraw from '../containers/wallet/withdraw/withdraw'
import Deposit from '../containers/wallet/deposit/deposit'


import CreateProject from '../containers/projects/createProject/createProject'
import EditProject from '../containers/projects/editProject/editProject'
import ProjectOverview from '../containers/projects/projectOverview/projectOverview'
import GlobalProjects from '../containers/projects/projectList/globalProjects'
import UserProjects from '../containers/projects/projectList/userProjects'


import EditUser from '../containers/users/editUser/editUser'
import UserOverview from '../containers/users/userOverview/userOverview'
import Users from '../containers/users/userList/userList'
import Signup from '../containers/users/signup/signup'
import Login from '../containers/users/login/login'


import GlobalPullRequests from '../containers/projects/pullRequests/globalPullRequests'
import ProjectPullRequests from '../containers/projects/pullRequests/projectPullRequests'
import UserPullRequests from '../containers/projects/pullRequests/userPullRequests'
import PullRequestOverview from '../containers/projects/pullRequests/pullRequestOverview'
import EditPullRequest from '../containers/projects/pullRequests/editPullRequest'
import CreatePullRequest from '../containers/projects/pullRequests/createPullRequest'


import GlobalIssues from '../containers/projects/issues/globalIssues'
import UserIssues from '../containers/projects/issues/userIssues'
import CreateIssue from '../containers/projects/issues/createIssue'
import EditIssue from '../containers/projects/issues/editIssue'
import IssueOverview from '../containers/projects/issues/issueOverview'
import ProjectIssues from '../containers/projects/issues/projectIssues'


import GlobalCommits from '../containers/projects/commits/globalCommits'
import UserCommits from '../containers/projects/commits/userCommits'
import CreateCommit from '../containers/projects/commits/createCommit'
import EditCommit from '../containers/projects/commits/editCommit'
import CommitOverview from '../containers/projects/commits/commitOverview'
import ProjectCommits from '../containers/projects/commits/projectCommits'


import GlobalBranches from '../containers/projects/branches/globalBranches'
import UserBranches from '../containers/projects/branches/userBranches'
import CreateBranch from '../containers/projects/branches/createBranch'
import EditBranch from '../containers/projects/branches/editBranch'
import BranchOverview from '../containers/projects/branches/branchOverview'
import ProjectBranches from '../containers/projects/branches/projectBranches'

const routes = [
    /**
    * 
    * Branch Routes
    * 
    **/
    {
        exact: true,
        path: '/branches/global',
        container: GlobalBranches,
    }, {
        exact: true,
        path: '/branches/project/:projectId',
        container: ProjectBranches,
    },
    {
        exact: true,
        path: '/branches/user/:userId',
        container: UserBranches,
    }, {
        exact: true,
        path: '/branches/overview',
        container: BranchOverview,
    }, {
        exact: true,
        path: '/branches/edit',
        container: EditBranch,
    }, {
        exact: true,
        path: '/branches/create',
        container: CreateBranch,
    },



    /**
    * 
    * Commit Routes
    * 
    **/
    {
        exact: true,
        path: '/commits/global',
        container: GlobalCommits,
    }, {
        exact: true,
        path: '/commits/project/:projectId',
        container: ProjectCommits,
    },
    {
        exact: true,
        path: '/commits/user/:userId',
        container: UserCommits,
    }, {
        exact: true,
        path: '/commits/overview',
        container: CommitOverview,
    }, {
        exact: true,
        path: '/commits/edit',
        container: EditCommit,
    }, {
        exact: true,
        path: '/commits/create',
        container: CreateCommit,
    },



    /**
    * 
    * Pull Request Routes
    * 
    **/
    {
        exact: true,
        path: '/pullRequests/global',
        container: GlobalPullRequests,
    }, {
        exact: true,
        path: '/pullRequests/project/:projectId',
        container: ProjectPullRequests,
    },
    {
        exact: true,
        path: '/pullRequests/user/:userId',
        container: UserPullRequests,
    }, {
        exact: true,
        path: '/pullRequests/overview',
        container: PullRequestOverview,
    }, {
        exact: true,
        path: '/pullRequests/edit',
        container: EditPullRequest,
    }, {
        exact: true,
        path: '/pullRequests/create',
        container: CreatePullRequest,
    },

    /**
    * 
    * Issue Routes
    * 
    **/
    {
        exact: true,
        path: '/issues/global',
        container: GlobalIssues,
    }, {
        exact: true,
        path: '/issues/project/:projectId',
        container: ProjectIssues,
    },
    {
        exact: true,
        path: '/issues/user/:userId',
        container: UserIssues,
    }, {
        exact: true,
        path: '/issues/overview',
        container: IssueOverview,
    }, {
        exact: true,
        path: '/issues/edit',
        container: EditIssue,
    }, {
        exact: true,
        path: '/issues/create',
        container: CreateIssue,
    },


    /**
     * 
     * Home Routes
     * 
     */
    {
        exact: true,
        path: '/home',
        container: Home,
    },
    {
        exact: true,
        path: '/',
        container: Home,
    },



    /**
     * 
     * Dashboard Routes
     * 
     */
    {
        exact: true,
        path: '/dashboard',
        container: Dashboard,
    },



    /**
     * 
     * Payment Routes
     * 
     */
    {
        exact: true,
        path: '/payments',
        container: Wallet
    },
    {
        exact: true,
        path: '/payments/withdraw',
        container: withdraw
    }, {
        exact: true,
        path: '/payments/deposit',
        container: Deposit
    },



    /**
     * 
     * Project Routes
     * 
     */
    {
        exact: true,
        path: '/projects',
        container: UserProjects,
    }, {
        exact: true,
        path: '/projects/create',
        container: CreateProject,
    }, {
        exact: true,
        path: '/projects/edit',
        container: EditProject,
    }, {
        exact: true,
        path: '/projects/overview/:id',
        container: ProjectOverview,
    }, {
        exact: true,
        path: '/projects/global',
        container: GlobalProjects,
    },









    /**
     * 
     * User Routes
     * 
     **/
    {
        exact: true,
        path: '/users',
        container: Users,
    },
    {
        exact: true,
        path: '/signup',
        container: Signup,
    },
    {
        exact: true,
        path: '/login',
        container: Login,
    }, {
        exact: true,
        path: '/edit-user',
        container: EditUser,
    }, {
        exact: true,
        path: '/user-overview/:userId',
        container: UserOverview,
    }
];

export default routes
