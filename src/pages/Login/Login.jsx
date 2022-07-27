import { useState } from 'react';
import { loginApp } from '../../firebase/service';
import './Login.css'

const Login = () => {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    return (
        <div className='loginPage'>
            <form className='loginPage_form'>
                <h2>Sign In</h2>
                <label htmlFor='email'>
                    Email Address
                    <input type="email" name='email' value={loginForm.email} onChange={(e) => setLoginForm(prev => ({...prev, 
                        email: e.target.value}) )} />
                </label>
                <label htmlFor='password'>
                    Password
                    <input type='password' name='password' value={loginForm.password} onChange={(e) => setLoginForm(prev => ({...prev, 
                        password: e.target.value}) )}/>
                </label>
                <button className='loginPage_signInBtn' onClick={(e) => {
                    e.preventDefault();
                    loginApp(loginForm.email, loginForm.password);
                }}>
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default Login;