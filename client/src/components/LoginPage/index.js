import React from 'react';
import './index.css';
import Header from '../Header';
import Footer from '../Footer';
function Login() {

    return (
        
        <body>
            <Header></Header>
            <div className="container">

                <form className="login-form">
                    <h4 className="login">Login</h4>
                    <div>
                        <h5 className="">Username</h5>
                        <input type="text" id="username-login" />
                        <h5 className="">Password</h5>
                        <input type="password" id="password-login" />
                        <button className="login-button" type="submit">Login</button>
                    </div>
                </form>

                <div className="login-center">
                    <h3>Don't Have an Account? Signup Below!</h3>
                </div>


                <form className="signup-form">
                    <h4 className="signup">Signup</h4>
                    <div>
                        <h5>Username</h5>
                        <input type="text" name="" id="username-signup" />
                        <h5>Email</h5>
                        <input type="text" id="email-signup" />
                        <h5>Password</h5>
                        <input type="password" id="password-signup" />
                        <button className="signup-button" type="submit">Signup</button>
                    </div>
                </form>
            </div>
            
            <Footer></Footer>
        </body>
    )
}

export default Login;