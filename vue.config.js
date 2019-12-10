module.exports = {
	transpileDependencies: ['vuetify'],
	devServer: {
		proxy: 'http://localhost:3000'
	},
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-tv-ui/' : '/'
};
