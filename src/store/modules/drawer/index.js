import { mutations } from './mutations';
import { state } from './state';

const namespaced = true;

export const drawer = {
	namespaced,
	state,
	mutations,
};
