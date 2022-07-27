import './SideBar.css'
import { AiFillHome, AiFillPlayCircle, AiFillHeart, AiFillClockCircle } from 'react-icons/ai'
import { BiHistory } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const SideBar = ({drawer, setDrawer}) => {

    const location = useLocation();
    const currPage = location.pathname.split('/')[1];
    // console.log(currPage.pathname.split('/')[1]);

    return (
    <div className={`sideBar ${drawer && 'show-sidebar'}`}>
        <ul onClick={() => setDrawer(false)}>
            <Link to='/'>
                <li className={`${(currPage === '') && 'active'}`}>
                        <AiFillHome />Home
                </li>
            </Link>
            <Link to='/playlist'>
                <li className={`${(currPage === 'playlist') && 'active'}`}>
                        <AiFillPlayCircle />Playlist
                </li>
            </Link>
            <Link to='/liked'>
                <li className={`${(currPage === 'liked') && 'active'}`}>
                    <AiFillHeart />Liked
                </li>
            </Link>
            <Link to='/watchlater'>
                <li className={`${(currPage === 'watchlater') && 'active'}`}>
                    <AiFillClockCircle />Watch Later
                </li>
            </Link>
            <Link to='/history'>
                <li className={`${(currPage === 'history') && 'active'}`}>
                    <BiHistory />History
                </li>
            </Link>
        </ul>
    </div>
    )
}

export default SideBar;