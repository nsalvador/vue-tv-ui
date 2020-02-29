import AuthService from '../services/auth.service';

export const auth = {
	namespaced: true,
	state: {
		status: '',
		token: localStorage.getItem('token') || '',
		user: {}
	},
	getters: {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading';
		},
		auth_success(state, token, user) {
			state.status = 'success';
			state.token = token;
			state.user = user;
		},
		auth_error(state) {
			state.status = 'error';
		},
		logout(state) {
			state.status = '';
			state.token = '';
		}
	},
	actions: {
		async register({ commit, dispatch }, data) {
			try {
				commit('auth_request');
				const { token, user } = await AuthService.register(data);
				commit('auth_success', token, user);
				return Promise.resolve();
			} catch (e) {
				commit('auth_error', e);
				dispatch('logout');
				return Promise.reject(e);
			}
		},
		logout({ commit }) {
			AuthService.logout();
			commit('logout');
		}
	}
};
