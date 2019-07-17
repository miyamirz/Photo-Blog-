import axios from 'axios';
export const fetchComments = async postId => {
	let response = await axios.get(`/api/comments/${postId}`);
	let commentsData = await response.data;
	console.log('fetched data' + JSON.stringify(commentsData));
	return commentsData;
};
