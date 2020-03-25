import Vue from 'vue';

export const mutations = {
	SET_SHOWS: (state, payload) => {
		Vue.set(state, 'shows', payload);
		if (payload.length !== 0) {
			sessionStorage.setItem('shows', JSON.stringify(payload));
		}
	}
};
