import axios from "axios";
import { FETCH_POSTS } from "./types";
export const fetchPosts = async () => {
  try {
    let response = await axios.get("/api/posts");
    let posts = await response.data;
    return {
      type: FETCH_POSTS,
      payload: posts
    };
  } catch (e) {
    console.log(e);
  }
};
