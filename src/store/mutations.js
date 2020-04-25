import Vue from 'vue';

export const mutations = {
	SET_ERROR: (state, payload = null) => Vue.set(state, 'error', payload),
	SET_ERROR_MESSAGE: (state, message = '') => {
		Vue.set(state, 'message', message);
		Vue.set(state, 'snackbar', !!message);
	},
	SET_SNACKBAR: (state, payload = false) => Vue.set(state, 'snackbar', payload),
};
