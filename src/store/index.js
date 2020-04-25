import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './modules/auth';
import { search } from './modules/search';
import { drawer } from './modules/drawer';
import { show } from './modules/show';
import { getters } from './getters';
import { mutations } from './mutations';
import { state } from './state';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { auth, search, drawer, show },
	state,
	getters,
	mutations,
});
