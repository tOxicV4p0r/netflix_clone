import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

function Nav() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();


    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    const profileClick = () => {
        navigate('/profile');
    }

    const homeClick = () => {
        navigate('/');
    }

    return (
        <div className={`nav ${show ? "nav__black" : ""}`}>
            <div className="nav__contents">
                <img
                    onClick={homeClick}
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt=""
                />
                <img
                    onClick={profileClick}
                    className="nav__avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Nav;