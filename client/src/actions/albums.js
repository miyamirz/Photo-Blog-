import axios from "axios";
import { FETCH_ALBUMS } from "./types";
export const fetchAlbumsList = async () => {
  console.log("fetching data for albums");
  let response = await axios.get("/api/albums");
  let albumData = await response.data;
  //console.log("album data is :" + JSON.stringify(albumData));
  return {
    type: FETCH_ALBUMS,
    payload: albumData
  };
};
