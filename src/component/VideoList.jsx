import VideoItem from "./VideoItem"

export default function VideoList({ videos, onSelectVideo }) {

  const videoList = videos.map(video=>{
    return <VideoItem onSelectVideo={onSelectVideo} key={video.id.videoId} video={video}/>
  })

  return (
    <div className="ui relaxed divided list">
      VideoList{videos.length}
      {videoList}
      </div>
  )
      
}
