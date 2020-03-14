import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';
import Axios from 'axios';

Vue.prototype.$http = Axios;
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
	store,
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
