import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('./pages/Home.vue'),
		name: 'home',
		beforeEnter(to, from, next) {
			localStorage.removeItem('route');
			next();
		}
	},
	{
		path: '/search',
		component: () => import('./pages/Search.vue'),
		name: 'search',
		beforeEnter(to, from, next) {
			localStorage.setItem('route', to.name);
			next();
		}
	}
];

export default new VueRouter({
	mode: 'history',
	routes,
	base: process.env.NODE_ENV === 'production' ? '/vue-tv-ui/' : '/'
});
