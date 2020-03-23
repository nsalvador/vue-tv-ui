import Vue from 'vue';

export const mutations = {
	SET_DRAWER: (state, payload) => Vue.set(state, 'drawer', payload),
	TOGGLE_DRAWER: state => {
		const { drawer } = state;
		Vue.set(state, 'drawer', !drawer);
	}
};
