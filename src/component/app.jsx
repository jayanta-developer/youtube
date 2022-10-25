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
    this.setState({ videos: response.data.items })
  }


  onSelectVideo=(video)=>{    
    this.setState({ selectedVideo: video })   
    }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFromSubmit={this.onTermSubmit} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos}/>
        
      </div>
    );
  }

};

export default App;
