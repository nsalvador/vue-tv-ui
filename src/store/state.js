export const state = {
	links: [
		{ text: 'Home', to: '/' },
		{ text: 'Register', to: '/register' },
		{ text: 'Log In', to: '/login' },
		{ text: 'Subscriptions', to: '/subscription' },
		{ text: 'Log Out' },
	],
	message: '',
	snackbar: false,
	error: null,
	selection: [],
};
