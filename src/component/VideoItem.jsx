//style sheet
import VideoItemStyle from "./Style/VideoItem.css"


export default function VideoItem({ video }) {
  return (
    console.log(video.snippet.thumbnails.high.url),
    <div className="video_item item">
      <img className="ui image" src={video.snippet.thumbnails.high.url} alt="" />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}
