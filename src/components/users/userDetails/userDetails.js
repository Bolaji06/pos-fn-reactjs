import AuthenticatedNavBar from "../../common/navBar/authenticatedNavBar"
import UserOverviewNavBar from '../../common/navBar/userOverviewNavBar'

function UserDetails() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <div>
                <AuthenticatedNavBar />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <UserOverviewNavBar />
                </div>
                <div>
                    UserDetails
                    <div style={{ display: 'flex' }}>
                        <button>PROJECTS</button>
                        <button>PULL REQUESTS</button>
                    </div>
                    <h6>NAME :</h6>
                    <h6>EMAIL :</h6>
                    <h6>ROLES :</h6>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
