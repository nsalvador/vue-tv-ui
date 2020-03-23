export const getters = {
	GET_SERIES: state => {
		if (Object.keys(state.series).length === 0) {
			return {};
		}

		const { name, series } = state.series;
		const size = 12;
		const results = series.length;
		const page = state.page - 1;
		const pages = Math.floor(results / size) + (results % size !== 0 ? 1 : 0);

		return {
			name,
			results,
			page: page + 1,
			pages,
			series: series.splice(page * size, size)
		};
	}
};
