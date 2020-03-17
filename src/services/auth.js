import axios from 'axios';

class AuthService {
	async register(data) {
		const response = await axios({
			url: `${process.env.VUE_APP_API}/users/register`,
			method: 'post',
			data
		});
		const token = response.data.token;
		localStorage.setItem('token', token);
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		return response.data.token;
	}

	async login(data) {
		const response = await axios({
			url: `${process.env.VUE_APP_API}/users/login`,
			method: 'post',
			data
		});
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
