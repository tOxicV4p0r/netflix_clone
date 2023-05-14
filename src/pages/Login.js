import { useState } from "react";
import SignInScreen from "./SignIn"
import "./login.css";

function Login() {
    const [signIn, setSignIn] = useState(false);

    function signInPage() {
        setSignIn(true);
    }

    return (
        <div className="loginScreen">
            <div className="loginScreen__bg">
                <img
                    className="loginScreen__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                />
                <button className="loginScreen__button" onClick={signInPage}>Sign In</button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {
                    signIn ?
                        <SignInScreen />
                        :
                        <>
                            <div>
                                <h1>
                                    Unlimited films, TV programmes and more.
                                </h1>
                                <h2>
                                    Watch anywhere. Cancel at any time.
                                </h2>
                                <h3>
                                    Ready to watch? Enter your email to create or restart your membership.
                                </h3>
                                <div className="loginScreen__input">
                                    <form>
                                        <input type="email" placeholder="Email Address" />
                                        <button className="loginScreen__getStarted" onClick={signInPage}>GET STARTED</button>
                                    </form>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Login;