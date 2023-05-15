import { useSelector } from "react-redux";
import { selectorUser } from "../../features/user/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import MemberPlan from "../MemberPlan/MemberPlan";
import "./profile.css";

function Profile() {
    const user = useSelector(selectorUser)

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
                />
                <div className="profileScreen__detail">
                    <h2>{user.user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <MemberPlan />
                    </div>
                    <button onClick={handleSignOut} className="profileScreen__signOut">Sign Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;