export default {
	methods: {
		showButton(link) {
			return (
				link.text === 'Home' ||
				link.text == 'Sign Up' ||
				link.text == 'Log In' ||
				(link.text == 'Log Out' && this.started)
			);
		}
	}
};
