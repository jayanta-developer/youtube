import React from "react";
import YouTubeApi from "../api/YouTubeApi";

//Components
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";


class App extends React.Component {
  state = { video: [] }

  onTermSubmit = async (term) => {
    const response = await YouTubeApi.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ video: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFromSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.video}/>
        
      </div>
    );
  }

};

export default App;
