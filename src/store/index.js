import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './modules/auth';
import { search } from './modules/search';
import { drawer } from './modules/drawer';
import { show } from './modules/show';

Vue.use(Vuex);

const state = {
	links: [
		{ text: 'Home', to: '/' },
		{ text: 'Register', to: '/register' },
		{ text: 'Log In', to: '/login' },
		{ text: 'Log Out' }
	],
	error: null
};

const getters = {
	GET_LINKS: state => value => {
		const length = state.links.length - 1;
		switch (value) {
			case 'first':
				return state.links.filter((link, index) => index === 0)[0];
			case 'mid':
				return state.links.filter(
					(link, index) => index !== 0 && index !== length
				);
			case 'last':
				return state.links.filter((link, index) => index === length)[0];
		}
	}
};

const mutations = {
	SET_ERROR: (state, payload = null) => (state.error = payload)
};

export default new Vuex.Store({
	modules: { auth, search, drawer, show },
	state,
	getters,
	mutations
});
