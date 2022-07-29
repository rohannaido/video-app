import { useState } from 'react';
import { loginApp } from '../../firebase/service';
import './SignUp.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { createUser } from '../../firebase/service';

const SignUp = () => {

    const [signUpForm, setSignUpForm] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className='signUpPage'>
            <form className='signUpPage_form'>
                <h2>Sign Up</h2>
                <div className='signUpPage_nameInputDiv'>
                    <label htmlFor='fname'>
                        First Name
                        <input type="text" name='fname' value={signUpForm.fName} onChange={(e) => setSignUpForm(prev => ({...prev, 
                            fName: e.target.value}) )} />
                    </label>
                    <label htmlFor='lname'>
                        Last Name
                        <input type="text" name='lname' value={signUpForm.lName} onChange={(e) => setSignUpForm(prev => ({...prev, 
                            lName: e.target.value}) )} />
                    </label>
                </div>
                <label htmlFor='email'>
                    Email Address
                    <input type="email" name='email' value={signUpForm.email} onChange={(e) => setSignUpForm(prev => ({...prev, 
                        email: e.target.value}) )} />
                </label>
                <label htmlFor='password'>
                    Password
                    <input type='password' name='password' value={signUpForm.password} onChange={(e) => setSignUpForm(prev => ({...prev, 
                        password: e.target.value}) )}/>
                </label>
                <button className='signUpPage_signInBtn' onClick={(e) => {
                    e.preventDefault();
                    try{
                        createUser(dispatch, signUpForm )
                        .then(() => navigate('/'));
                    }
                    catch(error){
                        console.log(error);
                    }
                }}>
                    Create New Account
                </button>
                <button class="signUpPage_LoginBtn" type="button" onClick={() => navigate('/login')}>
                    Already have an account &gt;
                </button>
            </form>
        </div>
    )
}

export default SignUp;