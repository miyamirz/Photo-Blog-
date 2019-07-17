import { combineReducers } from 'redux';
import { user } from './userReducer';
import { albumReducer } from './albumReducer';
import { photosReducer } from './photosReducer';
import { postsReducer } from './postsReducer';
const rootReducer = combineReducers({
	user,
	albumsList: albumReducer,
	photosData: photosReducer,
	posts: postsReducer
});

export default rootReducer;
