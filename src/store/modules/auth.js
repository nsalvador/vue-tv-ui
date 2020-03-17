import AuthService from '../../services/auth';

const state = {
	token: localStorage.getItem('token') || ''
};

const getters = {
	isLoggedIn: state => !!state.token
};

const mutations = {
	auth_success(state, token) {
		state.token = token;
	},
	logout(state) {
		state.token = '';
	}
};

const actions = {
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

export const auth = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
