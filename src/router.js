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
		component: () => import('./pages/Register.vue'),
		name: 'register'
	},
	{
		path: '/login',
		component: () => import('./pages/LogIn.vue'),
		name: 'login'
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
		const isLoggedIn = store.getters['auth/isLoggedIn'];
		if (isLoggedIn) {
			return next();
		}
		next({ name: 'login' });
	} else {
		next();
	}
});

export default router;
