import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state = {
	token: sessionStorage.getItem('token') || ''
};

const namespaced = true;

export const auth = {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
