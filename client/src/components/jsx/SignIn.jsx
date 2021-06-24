import "../css/SignIn.css"

const SignIn = () => {
    return (
        <div id="signin">
            <h1>CompWiz</h1>
            <form action="" autocomplete="off">
                <div id="username-container">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                </div>

                <div id="password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>

                <div id="signin-button-container">
                    <button type="button" id="signin-button">Sign In</button>
                </div>
            </form>
            <section id="signup-forgot-container">
                <div id="signup-link">
                    <span>Don't have an account? <a href="#">Click Here</a></span>
                </div>
                <div id="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </section>
        </div>
    )
}

export default SignIn
