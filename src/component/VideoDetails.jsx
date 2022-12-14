

export default function VideoDetails({ video }) {
  if(!video){
    return <div>Loading...</div>
  }
const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`

  return (   
    <div>
      <div className="ui embed">
        <iframe src={videoUrl}/>
      </div>

      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>      
      </div>
  )
}
