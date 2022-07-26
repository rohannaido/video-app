import './VideoCard.css'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { Link } from 'react-router-dom';


const VideoCard = ({videoItem}) => {

    const {_id, title, creator, uploaded } = videoItem;

    return(
        <Link to={`/video/${_id}`}>
            <div className="videoCard">
                <div className='videoCard_imageDiv'>
                    <img src={`https://i.ytimg.com/vi/${_id}/0.jpg`} alt={title} />
                </div>
                <div className='videoCard_contentDiv'>
                    <div className='videoCard_titleDiv'>
                        <h3 className='videoCard_title'>{title}</h3>
                        <span className='videoCard_optionsIcon'>
                            <HiOutlineDotsVertical />
                        </span>
                    </div>
                    <div className='videoCard_descriptionDiv'>
                        <span>{creator}</span>
                        <span>{uploaded}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard;