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
		results: 1,
		page: 1,
		pages: 1,
		name: '',
		loading: false
	},
	getters: {
		getLinks: state => state.links,
		getSeries: state => state.series,
		getPages: state => state.pages,
		getResults: state => state.results,
		getName: state => state.name,
		getLoading: state => state.loading
	},
	mutations: {
		setSeries: (state, series) => (state.series = series),
		setDrawer: (state, payload) => (state.drawer = payload),
		setPage: (state, payload) => (state.page = payload),
		setPages: (state, payload) => (state.pages = payload),
		setResults: (state, payload) => (state.results = payload),
		setName: (state, payload) => (state.name = payload),
		setLoading: (state, payload) => (state.loading = payload),
		toggleDrawer: state => (state.drawer = !state.drawer)
	},
	actions: {
		async search({ commit }, config) {
			try {
				commit('setLoading', true);
				let response = await axios(config);
				commit('setSeries', response.data);
				commit('setResults', response.data.results);
				commit('setPages', response.data.pages);
				commit('setName', response.data.name);
				commit('setLoading', false);
				return Promise.resolve();
			} catch (error) {
				return Promise.reject(error);
			}
		}
	}
});
