export default {
	methods: {
		onClick(link) {
			if (this.drawer) {
				this.toggleDrawer();
			}
			let text;
			switch (link.text) {
				case 'Sign Up':
					{
						text = link.text;
						this.dialog = true;
					}
					break;
				case 'Log In':
					{
						text = link.text;
						this.dialog = true;
					}
					break;
			}
			this.setDialogTitle(text);
		}
	}
};
