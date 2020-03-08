import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { auth } from './modules/auth';
import { search } from './modules/search';

Vue.use(Vuex);

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = 'https://vue-tv-api.herokuapp.com';
}

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
	error: ''
};

const getters = {
	GET_ERROR: state => state.error
};

const mutations = {
	SET_ERROR: (state, payload) => (state.error = payload),
	setDrawer: (state, payload) => (state.drawer = payload),
	toggleDrawer: state => (state.drawer = !state.drawer),
	setDialog: (state, payload) => (state.dialog = payload),
	setDialogTitle: (state, payload) => (state.dialogTitle = payload)
};

export default new Vuex.Store({
	modules: { auth, search },
	state,
	getters,
	mutations
});
