import './History.css'
import { useState, useEffect } from 'react';
import { clearHistory, getUserData } from '../../firebase/service';
import getVideoDataFromIdArr from '../../services/getVideoDataFromIdArr';
import VideoCard from '../../components/VideoCard/VideoCard';

const History = () => {

    const [historyArr, setHistoryArr] = useState([]);

    useEffect(() => {
        const loadHistoryVideos = async () => { 
            const data = await getUserData("9G5bcB6PGwTTTJruk18gIlGhLb42");
            
            setHistoryArr(getVideoDataFromIdArr(data.history));
        }
        loadHistoryVideos();
    },[])

    return (
        <div className='historyVideos'>
            <div className='historyVideos_header'>
                <h2>History</h2>
                <div>
                    <button onClick={() => clearHistory().then(() => setHistoryArr([]))}>
                        Clear All
                    </button>
                </div>
            </div>
            <div className='historyVideos_list'>
                {historyArr && historyArr.map(item => <VideoCard videoItem={item} key={item._id} />)}
            </div>
        </div>
    )
}

export default History;