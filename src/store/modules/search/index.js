import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state = {
	series: {},
	page: 1,
	isLoading: false
};

const namespaced = true;

export const search = {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
