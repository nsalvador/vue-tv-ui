import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { auth } from './auth.module';

Vue.use(Vuex);

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://vue-tv-api.herokuapp.com';
}

export default new Vuex.Store({
	modules: {
		auth
	},
	state: {
		series: {},
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
		getError: state => state.error
	},
	mutations: {
		setSeries: (state, series) => (state.series = series),
		setDrawer: (state, payload) => (state.drawer = payload),
		setPage: (state, payload) => (state.page = payload),
		setError: (state, payload) => (state.error = payload),
		setLoading: (state, payload) => (state.loading = payload),
		setStarted: (state, payload) => (state.started = payload),
		toggleDrawer: state => (state.drawer = !state.drawer),
		setDialog: (state, payload) => (state.dialog = payload),
		setDialogTitle: (state, payload) => (state.dialogTitle = payload)
	},
	actions: {
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
