import React, { useEffect } from "react";

function UserList(props) {
    const { getUsers } = props
    useEffect(() => {
        getUsers();
    }, [getUsers])

    return (
        <div >
            User List
        </div>
    );
}

export default UserList;
