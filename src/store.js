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
		items: [
			{
				text: 'Home',
				to: '/'
			}
		]
	},
	getters: {
		links: state => state.items,
		series: state => state.series
	},
	mutations: {
		setSeries: (state, series) => (state.series = series),
		setDrawer: (state, payload) => (state.drawer = payload),
		toggleDrawer: state => (state.drawer = !state.drawer)
	},
	actions: {
		async search({ commit }, config) {
			try {
				let response = await axios(config);
				commit('setSeries', response.data);
				return Promise.resolve();
			} catch (error) {
				return Promise.reject(error);
			}
		}
	}
});
