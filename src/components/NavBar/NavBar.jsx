import './NavBar.css'
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../assets/learnmedia.png'

const NavBar = () => {
    return (
        <div className="navBar">
            <div className='navBar_logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='navBar_searchInputDiv'>
                <AiOutlineSearch />
                <input className='navBar_searchInput' type="text" />
            </div>
        </div>
    )
}

export default NavBar;