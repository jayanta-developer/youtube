import React, { useState, useEffect } from "react";

//Components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
//hooks
import useVideo from "../hooks/useVideo";

const App = () => {
  const [selectedVideo, setSelectedVideos] = useState(null);
  const [videos, search] = useVideo("Money plant ");
  useEffect(() => {
    setSelectedVideos(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFromSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className=" eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onSelectVideo={setSelectedVideos} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
