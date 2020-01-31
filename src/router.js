import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('./pages/Home.vue'),
		name: 'home'
	},
	{
		path: '/search',
		component: () => import('./pages/Search.vue'),
		name: 'search'
	},
	{
		path: '/sign-up',
		component: () => import('./components/Form.vue'),
		name: 'sign-up',
		props: { page: 'Sign Up' }
	},
	{
		path: '/login',
		component: () => import('./components/Form.vue'),
		name: 'login',
		props: { page: 'Log In' }
	}
];

export default new VueRouter({
	mode: 'history',
	routes,
	base: process.env.NODE_ENV === 'production' ? '/vue-tv-ui/' : '/'
});
