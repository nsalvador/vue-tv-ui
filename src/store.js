import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://vue-tv-api.herokuapp.com';
}

export default new Vuex.Store({
	state: {
		series: {},
		started: false,
		drawer: false,
		links: [
			{
				text: 'Home',
				to: '/'
			},
			{
				text: 'Start'
			},
			{
				text: 'Finish'
			}
		],
		page: 1,
		error: null,
		loading: false
	},
	getters: {
		getSeries: state => state.series,
		getError: state => state.error
	},
	mutations: {
		setSeries: (state, series) => (state.series = series),
		setDrawer: (state, payload) => (state.drawer = payload),
		setPage: (state, payload) => (state.page = payload),
		setError: (state, payload) => (state.error = payload),
		setLoading: (state, payload) => (state.loading = payload),
		setStarted: (state, payload) => (state.started = payload),
		toggleDrawer: state => (state.drawer = !state.drawer)
	},
	actions: {
		async createUser({ commit }, config) {
			try {
				const response = await axios(config);
				sessionStorage.setItem('token', response.data.token);
				commit('setStarted', true);
			} catch (error) {
				commit('setError', error);
			}
		},
		async logoutUser({ commit }, config) {
			try {
				await axios(config);
				sessionStorage.removeItem('token');
				commit('setStarted', false);
			} catch (error) {
				commit('setError', error);
			}
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
