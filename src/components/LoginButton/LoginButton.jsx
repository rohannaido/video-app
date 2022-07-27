import './LoginButton.css';
import { useNavigate } from 'react-router-dom';
import { signOutApp } from '../../firebase/service';
import { useSelector, useDispatch } from 'react-redux/es/exports';

const LoginButton = () => {

    const navigate = useNavigate();
    const displayName = useSelector(state => state.user.value.displayName);
    console.log(displayName);

    const dispatch = useDispatch();

    return (
        <div className='loginButton_div'>
            {!displayName ? 
            <button className="loginButton" onClick={() => navigate('/login')}>
                Login
            </button>
            :
            <div>
                <span>Hi, {displayName}</span>
                <button className="loginButton_signOutBtn" onClick={() => signOutApp(dispatch)}>
                    Sign Out
                </button>
            </div>}
        </div>
    )
}

export default LoginButton;