module.exports = {
	info: {
		title: 'API NodeJs Template',
		version: '1.0.0',
		description: 'Plantilla de API en Node para desarrollos',
		contact: {
			name: 'Jesús.T',
			url: 'https://portfolio.Smartfulcode.com',
			email: 'jesus@jetiradoro.com',
		},
		xLogo: {
			url: '/docs/assets/logo.svg',
			backgroundColor: '#FFFFFF',
			altText: 'Logo',
		},
	},
	servers: [
		{
			url: 'https://api.smartfulcode.com',
			description: 'Sandbox environment server',
		},
	],
	folders: {
		concat: true,
		separator: '/',
	},
}
