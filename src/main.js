import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';
import axios from 'axios';

Vue.prototype.$http = axios;
const token = sessionStorage.getItem('token');
if (token) {
	Vue.prototype.$http.defaults.headers.common[
		'Authorization'
	] = `Bearer ${token}`;
}
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
	store,
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
