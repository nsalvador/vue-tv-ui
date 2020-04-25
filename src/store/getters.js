export const getters = {
	GET_LINKS: (state) => (value) => {
		if (value !== 'mid') {
			return state.links.filter((link) => link.text === value)[0];
		} else {
			return state.links.filter(
				(link) => link.text === 'Register' || link.text === 'Log In'
			);
		}
	},
};
