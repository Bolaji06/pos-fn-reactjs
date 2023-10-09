import React, { useEffect } from "react";
import NavBar from "../../common/navBar";

function UserList(props) {
    const { getUsers } = props
    useEffect(() => {
        getUsers();
    }, [getUsers])

    return (
        <div >
            <NavBar />
            User List
        </div>
    );
}

export default UserList;
