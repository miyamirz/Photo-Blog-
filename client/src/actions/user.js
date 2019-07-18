import { FETCH_USER } from './types';
import { user } from '../utils';

export const fetchUser = () => {
	return {
		type: FETCH_USER,
		payload: user
	};
};
