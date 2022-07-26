import './NavBar.css'
import { AiOutlineSearch } from 'react-icons/ai';

const NavBar = () => {
    return (
        <div className="navBar">
            <div className='navBar_searchInputDiv'>
                <AiOutlineSearch />
                <input className='navBar_searchInput' type="text" />
            </div>
        </div>
    )
}

export default NavBar;