import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const state = {
	shows: []
};

const namespaced = true;

export const show = {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
