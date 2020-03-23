import { mutations } from './mutations';

const state = {
	drawer: false
};

const namespaced = true;

export const drawer = {
	namespaced,
	state,
	mutations
};
