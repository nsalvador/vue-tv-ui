import axios from 'axios';

const url =
	process.env.NODE_ENV === 'production'
		? 'https://vue-tv-api.herokuapp.com/'
		: 'http://localhost:3000/';

class AuthService {
	async register(data) {
		const config = {
			url: `${url}/users/register`,
			method: 'post',
			data
		};
		const response = await axios(config);
		const token = response.data.token;
		localStorage.setItem('token', token);
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		return response.data.token;
	}

	logout() {
		localStorage.removeItem('token');
		delete axios.defaults.headers.common['Authorization'];
	}
}

export default new AuthService();
