import { useEffect } from "react";
import AuthenticatedNavBar from "../../common/navBar/authenticatedNavBar";
import { NavLink } from "react-router-dom/dist";

function UserList(props) {
    const { getUsers, users } = props
    useEffect(() => {
        getUsers();
    }, [getUsers])

    return (
        <div >
            <AuthenticatedNavBar />
            <h1>User List</h1>
            {users.map(user => (
                <NavLink to={`/user-overview/${user.id}`}>
                    <div style={{ display: 'flex' }} key={`key-${user.firstName}`}>
                        <div>First Name : </div>  <div>{user.firstName}</div>
                    </div>
                </NavLink>))}
        </div>
    );
}

export default UserList;
