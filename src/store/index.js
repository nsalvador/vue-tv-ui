import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import { auth } from './auth.module';

Vue.use(Vuex);

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://vue-tv-api.herokuapp.com';
}

export default new Vuex.Store({
	// modules: {
	// 	auth
	// },
	state: {
		status: '',
		token: localStorage.getItem('token') || '',
		user: {},
		series: {},
		// isLoggedIn: false,
		drawer: false,
		dialog: false,
		dialogTitle: '',
		// links: [
		// 	{
		// 		text: 'Home',
		// 		to: '/'
		// 	},
		// 	{
		// 		text: 'Log Out'
		// 	}
		// ],
		page: 1,
		error: null,
		loading: false
	},
	getters: {
		getSeries: state => state.series,
		getError: state => state.error,
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status
	},
	mutations: {
		// setLoggedIn: (state, payload) => (state.isLoggedIn = payload),
		setSeries: (state, series) => (state.series = series),
		setDrawer: (state, payload) => (state.drawer = payload),
		setPage: (state, payload) => (state.page = payload),
		setError: (state, payload) => (state.error = payload),
		setLoading: (state, payload) => (state.loading = payload),
		setStarted: (state, payload) => (state.started = payload),
		toggleDrawer: state => (state.drawer = !state.drawer),
		setDialog: (state, payload) => (state.dialog = payload),
		setDialogTitle: (state, payload) => (state.dialogTitle = payload),

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
});
