module.exports = {
	transpileDependencies: ['vuetify'],
	devServer: {
		proxy: 'http://localhost:3000'
	},
	publicPath: process.env.VUE_APP_BASE_URL
};
