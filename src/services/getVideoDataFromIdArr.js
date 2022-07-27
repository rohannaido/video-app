import { videos } from "../data/videos";

export default function getVideoDataFromIdArr(idArr) {
    return idArr.map(videoId => {
        return videos.filter(item => item._id === videoId )[0];
    })
};