import './LoginButton.css';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {

    const navigate = useNavigate();

    return (
        <button className="loginButton" onClick={() => navigate('/login')}>
            Login
        </button>
    )
}

export default LoginButton;