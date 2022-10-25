import VideoItem from "./VideoItem"

export default function VideoList({ videos }) {

  const videoList = videos.map(video=>{
    return <VideoItem key={video.id.videoId} video={video}/>
  })

  return (
    <div className="ui relaxed divided list">
      VideoList{videos.length}
      {videoList}
      </div>
  )
      
}
