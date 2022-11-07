import React from "react";
import YouTubeApi from "../api/YouTubeApi";

//Components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import { useState } from "react";


const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideos] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await YouTubeApi.get('/search', {
      params: {
        q: term
      }
    })
    setVideos(response.data.items);
    setSelectedVideos(response.data.items[0])
  }

  return (
    <div className="ui container">
      <SearchBar onFromSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className=" eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onSelectVideo={setSelectedVideos}
              videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );

}
export default App;
