import './VideoListing.css'
import { videos } from '../../data/videos';
import VideoCard from '../../components/VideoCard/VideoCard';

const getVideoCategories = (videosArr) => {
    return [...new Set(videosArr.map((item) => item.category))];
}

const VideoListing = () => {

    const categories = getVideoCategories(videos);

    console.log(categories);

    return (
        <div className="videoListing">
            <div className='videoListing_filters'>
                {categories.map((item) => item)}
            </div>

            <div className="videoListing_panel">
                {videos.map((item) => <VideoCard videoItem={item} />)}
            </div>
        </div>
    )
}

export default VideoListing;