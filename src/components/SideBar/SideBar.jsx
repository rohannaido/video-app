import './SideBar.css'
import { AiFillHome, AiFillPlayCircle, AiFillHeart, AiFillClockCircle } from 'react-icons/ai'
import { BiHistory } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const SideBar = () => {
    return (
    <div className="sideBar">
        <ul>
            <Link to='/'>
                <li>
                        <AiFillHome />Home
                </li>
            </Link>
            <Link to='/history'>
                <li>
                        <AiFillPlayCircle />Playlist
                </li>
            </Link>
            <li>
                <AiFillHeart />Liked
            </li>
            <li>
                <AiFillClockCircle />Watch Later
            </li>
            <Link to='/history'>
                <li>
                    <BiHistory />History
                </li>
            </Link>
        </ul>
    </div>
    )
}

export default SideBar;