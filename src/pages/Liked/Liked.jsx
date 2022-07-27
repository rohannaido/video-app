import './Liked.css'
import { useState, useEffect } from 'react';
import { getUserData } from '../../firebase/service';
import getVideoDataFromIdArr from '../../services/getVideoDataFromIdArr';
import VideoCard from '../../components/VideoCard/VideoCard';

const Liked = () => {

    const [likedArr, setLikedArr] = useState([]);

    useEffect(() => {
        const loadWatchLater = async () => { 
            const data = await getUserData("9G5bcB6PGwTTTJruk18gIlGhLb42");
            console.log(data.likedArr)
            
            setLikedArr(getVideoDataFromIdArr(data.liked));

        }
        loadWatchLater();
    },[])

    return (
        <div className='likedVideos'>
            {likedArr && likedArr.map(item => <VideoCard videoItem={item} key={item._id} />)}
        </div>
    )
}

export default Liked;