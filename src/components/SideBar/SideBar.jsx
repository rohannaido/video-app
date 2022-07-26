import './SideBar.css'
import { AiFillHome, AiFillPlayCircle, AiFillHeart, AiFillClockCircle } from 'react-icons/ai'
import { BiHistory } from 'react-icons/bi'

const SideBar = () => {
    return (
    <div className="sideBar">
        <ul>
            <li>
                <AiFillHome />Home
            </li>
            <li>
                <AiFillPlayCircle />Playlist
            </li>
            <li>
                <AiFillHeart />Liked
            </li>
            <li>
                <AiFillClockCircle />Watch Later
            </li>
            <li>
                <BiHistory />History
            </li>
        </ul>
    </div>
    )
}

export default SideBar;