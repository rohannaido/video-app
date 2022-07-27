import './WatchLater.css'
import { getUserData } from '../../firebase/service';
import { useState, useEffect } from 'react';
import VideoCard from '../../components/VideoCard/VideoCard';
import getVideoDataFromIdArr from '../../services/getVideoDataFromIdArr';

const WatchLater = () => {

    const [watchLaterArr, setWatchLaterArr] = useState([]);

    useEffect(() => {
        const loadWatchLater = async () => { 
            const data = await getUserData("9G5bcB6PGwTTTJruk18gIlGhLb42");
            console.log(data.watchLater)
            
            setWatchLaterArr(getVideoDataFromIdArr(data.watchLater));

        }
        loadWatchLater();
    },[])

    return (
        <div className='watchLater'>
            {watchLaterArr && watchLaterArr.map(item => <VideoCard videoItem={item} key={item._id} />)}
        </div>
    )
}

export default WatchLater;