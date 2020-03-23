import ShowService from '../../services/show';

const actions = {
	async subscribe(show) {
		await ShowService.create(show);
	}
};

export const show = {
	namespaced: true,
	actions
};
