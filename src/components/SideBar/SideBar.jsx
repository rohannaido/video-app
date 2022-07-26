import './SideBar.css'
import { AiFillHome, AiFillPlayCircle, AiFillHeart, AiFillClockCircle } from 'react-icons/ai'
import { BiHistory } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const SideBar = () => {
    return (
    <div className="sideBar">
        <ul>
            <Link to='/'>
                <li className='active'>
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
            <Link to='/watchlater'>
                <li>
                    <AiFillClockCircle />Watch Later
                </li>
            </Link>
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