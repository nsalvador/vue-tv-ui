const state = {
	drawer: false
};

const mutations = {
	SET_DRAWER: (state, payload) => (state.drawer = payload),
	TOGGLE_DRAWER: state => (state.drawer = !state.drawer)
};

export const drawer = {
	namespaced: true,
	state,
	mutations
};
