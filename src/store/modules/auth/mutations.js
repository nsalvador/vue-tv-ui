export const mutations = {
	auth_success(state, token) {
		state.token = token;
	},
	logout(state) {
		state.token = '';
	}
};
