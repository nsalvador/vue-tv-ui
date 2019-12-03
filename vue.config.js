module.exports = {
	transpileDependencies: ['vuetify'],
	devServer: {
		proxy: 'http://localhost:3000'
	},
	publicPath:
		process.env.NODE_ENV === 'production' ? 'tv-calendar-app-client' : '/',
	outputDir: 'docs'
};
