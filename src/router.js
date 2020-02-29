import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

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
		path: '/register',
		component: () => import('./components/Form.vue'),
		name: 'register',
		props: { page: 'Register' }
	},
	{
		path: '/login',
		component: () => import('./components/Form.vue'),
		name: 'login',
		props: { page: 'Log In' }
	},
	{
		path: '/subscription',
		component: () => import('./components/Subscription.vue'),
		name: 'subscription',
		meta: {
			requiresAuth: true
		}
	}
];

let router = new VueRouter({
	mode: 'history',
	routes,
	base: process.env.NODE_ENV === 'production' ? '/vue-tv-ui' : '/'
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters['auth/isLoggedIn']) {
			return next();
		}
		next({ name: 'login' });
	} else {
		next();
	}
});

export default router;
