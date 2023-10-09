import React from "react";
import UserOverviewNavBar from "../../common/navBar/userOverviewNavBar";

function UserDetails(props) {
    const { user } = props
    return (
        <div >
            <UserOverviewNavBar userId={user?.id || ''} />
            UserDetails
            <div style={{ display: 'flex' }}>
                <button>PROJECTS</button>
                <button>PULL REQUESTS</button>
            </div>
            <h6>NAME :</h6>
            <h6>EMAIL :</h6>
            <h6>ROLES :</h6>
        </div>
    );
}

export default UserDetails;
