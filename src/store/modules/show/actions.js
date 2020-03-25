import ShowService from '../../../services/show';

export const actions = {
	async subscribeToShow({ dispatch }, show) {
		await ShowService.subscribeToShow(show);
		await dispatch('getShows');
	},
	async getShows({ commit }) {
		const response = await ShowService.getShows();
		commit('SET_SHOWS', response);
	}
};
