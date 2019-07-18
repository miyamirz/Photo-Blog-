import axios from "axios";
import { FETCH_PHOTOS } from "./types";
export const fetchAlbumPhotos = async albumId => {
  try {
    let response = await axios.get(`/api/photos/${parseInt(albumId)}`);
    let albumData = await response.data;

    return {
      type: FETCH_PHOTOS,
      payload: albumData
    };
  } catch (e) {
    console.log(e);
  }
};
