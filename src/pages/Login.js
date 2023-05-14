import "./login.css";

function Login() {
    return (
        <div className="loginScreen">
            <div className="loginScreen__bg">
                <img
                    className="loginScreen__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                />
                <button className="loginScreen__button">Sign In</button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                <>
                    <h1>
                        Unlimited films, TV programmes and more.
                    </h1>
                </>
            </div>
        </div>
    );
};

export default Login;