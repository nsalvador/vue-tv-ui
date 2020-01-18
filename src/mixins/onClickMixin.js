export default {
	methods: {
		onClick() {
			if (this.drawer) {
				this.toggleDrawer();
			}

			// if (link.text == 'Sign Up' || link.text == 'Log In') {
			// 	router.push({name: 'sign-up'})
			// 	// alert(link.text);
			// }
			// if (link.text == 'Sign Up' || link.text == 'Log In') {
			// 	this.setDialogTitle(link.text);
			// 	this.dialog = true;
			// }
		}
	}
};
