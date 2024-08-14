module.exports = {
	info: {
		title: 'Innobox API',
		version: '1.0.0',
		description: 'Innobox API to integration node red services',
		contact: {
			name: 'Innova IT',
			url: 'https://innovait.com',
			email: 'innovait@innovait.cat',
		},
		xLogo: {
			url: '/api/docs/assets/logo.png',
			backgroundColor: '#FFFFFF',
			altText: 'Innova IT',
		},
	},
	servers: [
		{
			url: 'http://stg-innobox-api.innovait.cat',
			description: 'Sandbox environment server',
		},
	],
	folders: {
		concat: true,
		separator: '/',
	},
}
