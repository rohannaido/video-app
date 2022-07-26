import './NavBar.css'
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../assets/learnmedia.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to='/'>
                <div className='navBar_logo'>
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className='navBar_searchInputDiv'>
                <AiOutlineSearch />
                <input className='navBar_searchInput' type="text" />
            </div>
        </div>
    )
}

export default NavBar;