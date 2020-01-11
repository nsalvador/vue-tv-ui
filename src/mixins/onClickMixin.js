export default {
	methods: {
		onClick(link) {
			if (this.drawer) {
				this.toggleDrawer();
			}
			if (link.text == 'Sign Up' || link.text == 'Log In') {
				this.setDialogTitle(link.text);
				this.dialog = true;
			}
		}
	}
};
