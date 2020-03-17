import axios from 'axios';

const state = {
	series: null,
	page: 1,
	isLoading: false
};

const mutations = {
	SET_SERIES: (state, series) => (state.series = series),
	SET_PAGE: (state, page) => (state.page = page),
	SET_LOADING: (state, payload) => (state.isLoading = payload)
};

const actions = {
	async search({ commit, state }, show) {
		try {
			const response = await axios({
				url: `${process.env.VUE_APP_API}/shows/search`,
				method: 'post',
				data: { show },
				params: { page: state.page }
			});
			commit('SET_SERIES', response.data);
			commit('SET_PAGE', response.data.page);
		} catch (error) {
			commit('SET_ERROR', error, { root: true });
		}
		commit('SET_LOADING', false);
	},

	async GET_SUBSCRIPTIONS({ commit }) {
		const response = await axios({
			url: `${process.env.VUE_APP_API}/shows`,
			methods: 'get'
		});
		commit('SET_SERIES', response.data);
	}
};

export const search = {
	namespaced: true,
	state,
	mutations,
	actions
};
