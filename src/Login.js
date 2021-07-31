import React, { useState } from 'react';
import './Login.css';
import AmazonLogo from './amazon_PNG6.png';
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase login
    }
    const register = e => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <div className="login__header">

                <Link to='/'>
                    <img className="login__logo" src={AmazonLogo} alt="logo" />
                </Link>

            </div>
            <div className="login_container">
                <h1>Sign In</h1>
                <form> 
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={signIn} className="login__signinButton" type="submit">Sign in</button>
                </form>
                <p>By signing in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )

}
export default Login
