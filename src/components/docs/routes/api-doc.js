const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../dist/swagger.json')
const redoc = require('redoc-express')
const config = require('../../../config')

const options = {
	explorer: false,
	swaggerOptions: {
		docExpansion: 'none',
		syntaxHighlight: {
			activate: false,
			theme: 'monokai',
		},
		tryItOutEnabled: false,
	},
	customfavIcon: '/assets/favicon.ico',
	customSiteTitle: config.app_name,
	customCss: '.topbar{display:none}',
}
router.use('/swagger', swaggerUi.serve)
router.get('/swagger', swaggerUi.setup(swaggerDocument, options))

router.get('/redoc/swagger.json', (req, res) => {
	res.sendFile('/dist/swagger.json', {root: '.'})
})
router.get(
	'/redoc',
	redoc({
		title: 'Innobox Api Docs',
		specUrl: '/api-docs/redoc/swagger.json',
	})
)

module.exports = router
