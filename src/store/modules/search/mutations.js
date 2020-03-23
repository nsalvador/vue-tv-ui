import Vue from 'vue';

export const mutations = {
	SET_SERIES: (state, payload = {}) => {
		Vue.set(state, 'series', payload);
		if (Object.keys(payload).length !== 0) {
			localStorage.setItem('series', JSON.stringify(payload));
		}
	},
	SET_PAGE: (state, page = 1) => Vue.set(state, 'page', page),
	SET_LOADING: (state, payload = false) => Vue.set(state, 'isLoading', payload)
};
