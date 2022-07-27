import './NavBar.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../assets/learnmedia.png'
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';

const NavBar = ({setDrawer}) => {
    return (
        <div className="navBar">
            <div className='navBar_logoMenuDiv'>
                <div className='navBar_menuIcon' onClick={() => setDrawer(prev => !prev)}>
                    <GiHamburgerMenu />
                </div>
                <Link to='/'>
                    <div className='navBar_logo'>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
            </div>
            <div className='navBar_searchInputDiv'>
                <AiOutlineSearch />
                <input className='navBar_searchInput' type="text" />
            </div>
            <div className='navBar_login'>
                <LoginButton />
            </div>
        </div>
    )
}

export default NavBar;