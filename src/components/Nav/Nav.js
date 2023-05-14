import { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
    const [show, setShow] = useState(false);

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

    return (
        <div className={`nav ${show ? "nav__black" : ""}`}>
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt=""
                />
                <img
                    className="nav__avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Nav;