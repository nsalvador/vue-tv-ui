import ShowService from '../../../services/show';

export const actions = {
	async search({ commit, state }, show) {
		let payload;
		const seriesJSON = sessionStorage.getItem('series');
		if (!seriesJSON || JSON.parse(seriesJSON).name !== show) {
			const series = await ShowService.searchShow(show);
			payload = {
				name: show,
				page: state.page,
				series,
			};
		} else {
			payload = {
				...JSON.parse(seriesJSON),
				page: state.page,
			};
		}
		commit('SET_SERIES', payload);
	},
};
