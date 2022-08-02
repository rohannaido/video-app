import './VideoViewer.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { videos } from '../../data/videos';
import { getUserData, updateHistory, updateLikedVideo } from '../../firebase/service';
import { useSelector } from 'react-redux';
import { AiFillLike } from 'react-icons/ai';

const VideoViewer = () => {

    const location = useLocation();
    const videoId = location.pathname.split('/')[2];
    const { title, creator, uploaded, description, } = videos.filter((item) => (item._id === videoId))[0];
    const userId = useSelector(state => state.user.value.uid);
    const [isLiked, setIsLiked] = useState(false);
    const [likedArr, setLikedArr] = useState([]);

    const loadUserData = async () => {
        const data = await getUserData(userId);
        const likedVideos = data.liked;
        setLikedArr(likedVideos);
        if(likedVideos.includes(videoId)){
            setIsLiked(true);
        }
    }

    useEffect(() => {
        updateHistory(videoId);
        if(userId){
            loadUserData();
            getUserData(userId)
        }
    },[]);

    const handleLike = () => {
        
        setIsLiked(prev => {
            if(prev === false){
                updateLikedVideo([...likedArr, videoId]);
                return true;
            }
            else if(prev === true){
                updateLikedVideo(...[likedArr.filter(item => item != videoId)]);
                return false;
            }
        });

    }


    return(
        <div className='videoViewer'>
            <div className='videoViewer_playerFrame'>
                <iframe width="100%" height="100%" 
                src={`https://www.youtube.com/embed/${videoId}`} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className='videoViewer_content'>
                <h1 className='videoViewer_videoTitle'>{title}</h1>
                <p className='videoViewer_creator'>{creator}</p>
                <p className='videoViewer_uploadDate'>{uploaded}</p>

                <div className='videoViewer_actionsDiv'>
                    <button className={ isLiked && 'active'} onClick={handleLike}>
                        <AiFillLike />Like
                    </button>
                </div>
                
                <h3>Description : </h3>
                <p>{description}</p>
                <div className='videoViewer_fullBreak'></div>
            </div>
        </div>
    )
}

export default VideoViewer;