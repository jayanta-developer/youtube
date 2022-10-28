import React from "react";
import YouTubeApi from "../api/YouTubeApi";

//Components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";


class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async (term) => {
    const response = await YouTubeApi.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     })
  }


  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFromSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className=" eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default App;
