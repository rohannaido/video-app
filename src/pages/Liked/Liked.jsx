import './Liked.css'
import { useState, useEffect } from 'react';
import { getUserData } from '../../firebase/service';
import getVideoDataFromIdArr from '../../services/getVideoDataFromIdArr';
import VideoCard from '../../components/VideoCard/VideoCard';

const Liked = () => {

    const [likedArr, setLikedArr] = useState([]);

    useEffect(() => {
        const loadLikedVideos = async () => { 
            const data = await getUserData("9G5bcB6PGwTTTJruk18gIlGhLb42");
            console.log(data.likedArr)
            
            setLikedArr(getVideoDataFromIdArr(data.liked));

        }
        loadLikedVideos();
    },[])

    return (
        <div className='likedVideos'>
            <div className='likedVideos_header'>
                <h2>Liked Videos</h2>
            </div>
            <div className='likedVideos_list'>
                {likedArr && likedArr.map(item => <VideoCard videoItem={item} key={item._id} />)}
            </div>
        </div>
    )
}

export default Liked;