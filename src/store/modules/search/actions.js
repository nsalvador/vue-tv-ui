import axios from 'axios';

export const actions = {
	async search({ commit, state }, show) {
		try {
			let payload;
			const seriesJSON = localStorage.getItem('series');
			if (!seriesJSON || JSON.parse(seriesJSON).name !== show) {
				const response = await axios({
					url: `${process.env.VUE_APP_API}/shows/search`,
					method: 'post',
					data: { show }
				});
				payload = {
					name: show,
					page: state.page,
					series: response.data
				};
			} else {
				payload = { ...JSON.parse(seriesJSON), page: state.page };
			}
			commit('SET_SERIES', payload);
		} catch (error) {
			commit('SET_ERROR', error, { root: true });
		}
		commit('SET_LOADING', false);
	},

	async subscriptions({ commit }) {
		const response = await axios({
			url: `${process.env.VUE_APP_API}/shows`,
			methods: 'get'
		});
		commit('SET_SERIES', response.data);
	}
};
