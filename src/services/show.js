import axios from 'axios';

class ShowService {
	async create(data) {
		await axios({
			url: `${process.env.VUE_APP_API}/shows`,
			method: 'post',
			data
		});
	}
}

export default new ShowService();
