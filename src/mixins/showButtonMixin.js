export default {
	methods: {
		showButton(link) {
			return (
				link.text === 'Home' || (link.text == 'Log Out' && this.isLoggedIn)
			);
		}
	}
};
