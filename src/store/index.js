import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './modules/auth';
import { search } from './modules/search';

Vue.use(Vuex);

const state = {
	drawer: false,
	dialog: false,
	dialogTitle: '',
	links: [
		{
			text: 'Home',
			to: '/'
		},
		{
			text: 'Register',
			to: '/register'
		},
		{
			text: 'Log In',
			to: '/login'
		},
		{
			text: 'Log Out'
		}
	],
	error: null
};

const mutations = {
	SET_ERROR: (state, payload) => (state.error = payload),
	SET_DRAWER: (state, payload) => (state.drawer = payload),
	TOGGLE_DRAWER: state => (state.drawer = !state.drawer),
	setDialog: (state, payload) => (state.dialog = payload),
	setDialogTitle: (state, payload) => (state.dialogTitle = payload)
};

export default new Vuex.Store({
	modules: { auth, search },
	state,
	mutations
});
