import './VideoFilters.css'

const VideoFilters = ({categories, category, setCategory}) => {
    return (
        <div className="videoFilters">
            {categories.map((item) => { return (
                <button key={item} className={'videoFilters_category ' + ((category === item) ?'active' : '') } onClick={() => setCategory(item)}>
                    {item}
                </button>
            ) })}
        </div>
    )
}

export default VideoFilters;