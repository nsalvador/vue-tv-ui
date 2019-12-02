module.exports = {
	transpileDependencies: ['vuetify'],
	devServer: {
		proxy: 'http://localhost:3000'
	},
	publicPath: 'tv-calendar-app-client',
	outputDir: 'docs'
};
