import Nav from "../components/Nav/Nav";
import ProfileComp from "../components/Profile/Profile"
import "./profile.css"

function Profile() {
    return (
        <div className="profileScreen">
            <Nav />
            <ProfileComp />
        </div>
    );
};

export default Profile;