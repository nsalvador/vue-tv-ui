import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './modules/auth';
import { search } from './modules/search';
import { drawer } from './modules/drawer';

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
		switch (value) {
			case 'first':
				return state.links.filter((link, index) => index === 0)[0];
			case 'mid':
				return state.links.filter(
					(link, index) => index !== 0 && index !== state.links.length - 1
				);
			case 'last':
				return state.links.filter(
					(link, index) => index === state.links.length - 1
				)[0];
		}
	}
};

const mutations = {
	SET_ERROR: (state, payload) => (state.error = payload)
};

export default new Vuex.Store({
	modules: { auth, search, drawer },
	state,
	getters,
	mutations
});
