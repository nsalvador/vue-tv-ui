import axios from 'axios';

class AuthService {
	async register(data) {
		try {
			const config = {
				url: 'http://localhost:3000/users/register',
				method: 'post',
				data
			};
			const response = await axios(config);
			const token = response.data.token;
			localStorage.setItem('token', token);
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			return Promise.resolve(response.data);
		} catch (e) {
			return Promise.reject(e);
		}
	}

	logout() {
		localStorage.removeItem('token');
		delete axios.defaults.headers.common['Authorization'];
	}
}

export default new AuthService();
