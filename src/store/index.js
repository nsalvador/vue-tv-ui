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
		{ text: 'Subscriptions', to: '/subscription' },
		{ text: 'Log Out' }
	],
	error: null
};

const getters = {
	GET_LINKS: state => value => {
		if (value !== 'mid') {
			return state.links.filter(link => link.text === value)[0];
		} else {
			return state.links.filter(
				link => link.text === 'Register' || link.text === 'Log In'
			);
		}
	}
};

const mutations = {
	SET_ERROR: (state, payload = null) => Vue.set(state, 'error', payload)
};

export default new Vuex.Store({
	modules: { auth, search, drawer, show },
	state,
	getters,
	mutations
});
