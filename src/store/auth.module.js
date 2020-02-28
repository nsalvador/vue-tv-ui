import axios from 'axios';

export const auth = {
	state: {
		status: '',
		token: localStorage.getItem('token') || '',
		user: {}
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
		async register({ commit }, data) {
			try {
				commit('auth_request');
				const config = {
					url: 'http://localhost:3000/users/register',
					method: 'post',
					data
				};
				const response = await axios(config);
				const token = response.data.token;
				const user = response.data.user;
				localStorage.setItem('token', token);
				axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				commit('auth_success', token, user);
			} catch (e) {
				commit('auth_error', e);
				localStorage.removeItem('token');
				return Promise.reject(e);
			}
		},
		logout({ commit }) {
			commit('logout');
			localStorage.removeItem('token');
			delete axios.defaults.headers.common['Authorization'];
			return Promise.resolve();
		},
		async search({ commit }, config) {
			try {
				const response = await axios(config);
				commit('setSeries', response.data);
				commit('setPage', response.data.page);
			} catch (error) {
				commit('setError', error);
			}
			commit('setLoading', false);
		}
	}
};
