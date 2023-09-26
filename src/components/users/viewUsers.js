import React, { useEffect } from "react";

function ViewUsers(props) {
    const { getUsers } = props
    useEffect(() => {
        getUsers();
    }, [getUsers])

    return (
        <div >
            View Users
        </div>
    );
}

export default ViewUsers;
