import { useState } from 'react';
import { loginApp } from '../../firebase/service';
import './Login.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

const Login = () => {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                
                <div className='loginPage_buttonsDiv'>
                    <button className='loginPage_signInBtn' onClick={(e) => {
                        e.preventDefault();
                        try{
                            loginApp(dispatch, loginForm.email, loginForm.password)
                            .then(() => navigate('/'));
                        }
                        catch(error){
                            console.log(error);
                        }
                    }}>
                        Sign In
                    </button>

                    <button className='loginPage_signInBtn guest' onClick={(e) => {
                        e.preventDefault();
                        try{
                            loginApp(dispatch, "testuserrohan@gmail.com", "jqntdmh")
                            .then(() => navigate('/'));
                        }
                        catch(error){
                            console.log(error);
                        }
                    }}>
                        Sign In as Guest
                    </button>
                </div>

                <button class="loginPage_signUpBtn" type="button" onClick={() => navigate('/signup')}>
                    Create New Account &gt;
                </button>
            </form>
        </div>
    )
}

export default Login;