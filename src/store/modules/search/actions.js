// import axios from 'axios';
import ShowService from '../../../services/show';

export const actions = {
	async search({ commit, state }, show) {
		try {
			let payload;
			const seriesJSON = sessionStorage.getItem('series');
			if (!seriesJSON || JSON.parse(seriesJSON).name !== show) {
				const response = await ShowService.searchShow(show);
				payload = {
					name: show,
					page: state.page,
					series: response
				};
			} else {
				payload = { ...JSON.parse(seriesJSON), page: state.page };
			}
			commit('SET_SERIES', payload);
		} catch (error) {
			commit('SET_ERROR', error, { root: true });
		}
		commit('SET_LOADING', false);
	}
};
