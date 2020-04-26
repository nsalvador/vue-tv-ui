import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { state } from './state';

const namespaced = true;

export const search = {
	namespaced,
	state,
	getters,
	mutations,
	actions,
};
