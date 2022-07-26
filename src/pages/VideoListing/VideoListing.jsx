import './VideoListing.css'
import { videos } from '../../data/videos';
import VideoCard from '../../components/VideoCard/VideoCard';
import VideoFilters from '../../components/VideoFilters/VideoFilters';
import { useEffect, useState } from 'react';

const getVideoCategories = (videosArr) => {
    return ['All', ...new Set(videosArr.map((item) => item.category))];
}

const VideoListing = () => {

    const categories = getVideoCategories(videos);
    
    const [category, setCategory] = useState("All")
    const [filterVideos, setFilterVideos] = useState(videos);

    useEffect(() => {
        setFilterVideos(() => {
            if (category === 'All'){ return videos; }
            return [...videos.filter((item) => item.category === category )];
        });
    },[category])

    return (
        <div className="videoListing">
            <div className='videoListing_filters'>
                <VideoFilters categories={categories} category={category} setCategory={setCategory} />
            </div>

            <div className="videoListing_panel">
                {filterVideos.map((item) => <VideoCard videoItem={item} />)}
            </div>
        </div>
    )
}

export default VideoListing;