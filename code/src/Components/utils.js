import axios from "axios";

export const URL = "https://jsonplaceholder.typicode.com/posts/";

export const fetchPosts = async () => {
  try {
    return await axios.get(URL);
  } catch (e) {
    return [];
  }
};
