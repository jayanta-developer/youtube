import { useState, useEffect } from "react";
import YouTubeApi from "../api/YouTubeApi";

const useVideo = (defaultSearch) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearch);
  }, []);

  const search = async (term) => {
    const response = await YouTubeApi.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideo;
