import "./signin.css"

function SignIn() {
    return (
        <div className="signupSrreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;