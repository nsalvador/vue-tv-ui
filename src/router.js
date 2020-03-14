import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('./views/Home.vue'),
		name: 'home'
	},
	{
		path: '/search',
		component: () => import('./views/Search.vue'),
		name: 'search'
	},
	{
		path: '/register',
		component: () => import('./views/Register.vue'),
		name: 'register'
	},
	{
		path: '/login',
		component: () => import('./views/LogIn.vue'),
		name: 'login'
	},
	{
		path: '/subscription',
		component: () => import('./views/Subscription.vue'),
		name: 'subscription',
		meta: {
			requiresAuth: true
		}
	}
];

let router = new VueRouter({
	mode: 'history',
	routes,
	base: process.env.BASE_URL
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
