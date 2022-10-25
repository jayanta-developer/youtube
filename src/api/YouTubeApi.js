import axios from "axios";
const KEY = "AIzaSyAnUFEkzdxI8rZ9OJOzNepZ8w8ku0yndcw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
