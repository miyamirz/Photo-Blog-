import axios from 'axios';
import { FETCH_PHOTOS } from './types';
export const fetchAlbumPhotos = async albumId => {
	let response = await axios.get(`/api/photos/${parseInt(albumId)}`);
	let albumData = await response.data;

	return {
		type: FETCH_PHOTOS,
		payload: albumData
	};
};
