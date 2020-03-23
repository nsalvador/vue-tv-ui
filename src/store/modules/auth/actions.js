import AuthService from '../../../services/auth';

export const actions = {
	async register({ commit }, user) {
		const token = await AuthService.register(user);
		commit('auth_success', token);
	},
	async login({ commit }, user) {
		const token = await AuthService.login(user);
		commit('auth_success', token);
	},
	logout({ commit }) {
		AuthService.logout();
		commit('logout');
	}
};
