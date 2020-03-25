export const getters = {
	GET_SERIES: state => {
		if (Object.keys(state.series).length === 0) {
			return {};
		}

		const { name, series, page } = state.series;
		const SIZE = 12;
		const results = series.length;
		const pages = Math.floor(results / SIZE) + (results % SIZE !== 0 ? 1 : 0);

		return {
			name,
			results,
			page,
			pages,
			series: series.splice((page - 1) * SIZE, SIZE)
		};
	}
};
