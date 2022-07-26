import './VideoViewer.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { videos } from '../../data/videos';

const VideoViewer = () => {

    const location = useLocation();
    const videoId = location.pathname.split('/')[2];
    const { title, creator, uploaded, description, } = videos.filter((item) => (item._id === videoId))[0];
    console.log(videos.filter((item) => (item._id === videoId))[0]);

    useEffect(() => {
    },[]);

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
                <h3>Description : </h3>
                <p>{description}</p>
                <div className='videoViewer_fullBreak'></div>
            </div>
        </div>
    )
}

export default VideoViewer;