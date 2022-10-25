//style sheet
import VideoItemStyle from "./Style/VideoItem.css"


export default function VideoItem({ video, onSelectVideo }) {


  return (    
    <div className="video_item item"
      onClick={() => onSelectVideo(video)}
    >
      <img className="ui image" src={video.snippet.thumbnails.high.url} alt="" />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}
