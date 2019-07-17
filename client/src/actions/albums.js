import axios from 'axios';
import { FETCH_ALBUMS } from './types';
export const fetchAlbumsList = async () => {
	let response = await axios.get('/api/albums');
	let albumData = await response.data;
	return {
		type: FETCH_ALBUMS,
		payload: albumData
	};
};
