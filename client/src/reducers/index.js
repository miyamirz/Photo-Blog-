import { combineReducers } from 'redux';
import { user } from './userReducer';
import { albumReducer } from './albumReducer';
import { photosReducer } from './photosReducer';
const rootReducer = combineReducers({
	user,
	albumsList: albumReducer,
	photosData: photosReducer
});

export default rootReducer;
