import { useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./signin.css"

function SignIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then(console.log)
            .catch((error) => {
                alert(error.message);
            });
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then(console.log)
            .catch((error) => alert(error.message));
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
};

export default SignIn;