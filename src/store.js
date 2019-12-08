import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://tv-calendar-api.herokuapp.com';
}

export default new Vuex.Store({
	state: {
		series: {},
		drawer: false,
		links: [
			{
				text: 'Home',
				to: '/'
			}
		],
		page: 1,
		error: null,
		loading: false
	},
	getters: {
		getLinks: state => state.links,
		getSeries: state => state.series,
		getError: state => state.error,
		getLoading: state => state.loading
	},
	mutations: {
		setSeries: (state, series) => (state.series = series),
		setDrawer: (state, payload) => (state.drawer = payload),
		setPage: (state, payload) => (state.page = payload),
		setError: (state, payload) => (state.error = payload),
		setLoading: (state, payload) => (state.loading = payload),
		toggleDrawer: state => (state.drawer = !state.drawer)
	},
	actions: {
		async search({ commit }, config) {
			try {
				let response = await axios(config);
				commit('setSeries', response.data);
			} catch (error) {
				commit('setError', error);
			}
			commit('setLoading', false);
		}
	}
});
