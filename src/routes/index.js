import Home from '../containers/home/home'
import Dashboard from '../containers/dashboard/dashboard'
import Payments from '../containers/payments/payments'
import Users from '../containers/users/userList/userList'
import Signup from '../containers/users/signup/signup'
import Login from '../containers/users/login/login'
import CreateProject from '../containers/projects/createProject/createProject'
import EditProject from '../containers/projects/editProject/editProject'
import ProjectOverview from '../containers/projects/projectDetails/projectDetails'
import GlobalProjects from '../containers/projects/projectList/globalProjects'
import UserProjects from '../containers/projects/projectList/userProjects'
import withdraw from '../containers/payments/withdraw/withdraw'
import Deposit from '../containers/payments/deposit/deposit'
import GlobalPullRequests from '../containers/projects/pullRequests/globalPullRequests'
import ProjectPullRequests from '../containers/projects/pullRequests/projectPullRequests'
import UserPullRequests from '../containers/projects/pullRequests/userPullRequests'
import PullRequestOverview from '../containers/projects/pullRequests/pullRequestOverview'
import EditPullRequest from '../containers/projects/pullRequests/editPullRequest'
import CreatePullRequest from '../containers/projects/pullRequests/createPullRequest'
import EditUser from '../containers/users/editUser/editUser'
import UserOverview from '../containers/users/userOverview/userOverview'

export default ([
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
        container: Payments
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
]);
