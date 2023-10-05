import Home from '../containers/home/home'
import Dashboard from '../containers/dashboard/dashboard'
import Payments from '../containers/payments/payments'
import Users from '../containers/users/userList/userList'
import Projects from '../containers/projects/projectList/projectList'
import Signup from '../containers/users/signup/signup'
import Login from '../containers/users/login/login'
import CreateProject from '../containers/projects/createProject/createProject'
import EditProject from '../containers/projects/editProject/editProject'
import ProjectDetails from '../containers/projects/projectDetails/projectDetails'
import ProjectList from '../containers/projects/projectList/projectList'

export default ([
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



    /**
     * 
     * Project Routes
     * 
     */
    {
        exact: true,
        path: '/projects',
        container: Projects,
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
        path: '/projects/details',
        container: ProjectDetails,
    }, {
        exact: true,
        path: '/projects/list',
        container: ProjectList,
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
    }
]);
