import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Search from './pages/Search.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Home,
		name: 'home'
	},
	{
		path: '/search',
		component: Search,
		name: 'search'
	}
];

export default new VueRouter({
	mode: 'history',
	routes,
	base: process.env.NODE_ENV === 'production' ? '/vue-tv-ui/' : '/'
});
