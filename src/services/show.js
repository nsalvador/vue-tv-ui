import axios from 'axios';

class ShowService {
	async searchShow(show) {
		const response = await axios({
			url: `${process.env.VUE_APP_API}/shows/search`,
			method: 'post',
			data: { show }
		});
		return response.data;
	}
	async subscribeToShow(data) {
		await axios({
			url: `${process.env.VUE_APP_API}/shows`,
			method: 'post',
			data
		});
	}
	async getShows() {
		const response = await axios({
			url: `${process.env.VUE_APP_API}/shows`,
			method: 'get'
		});
		return response.data;
	}
}

export default new ShowService();
