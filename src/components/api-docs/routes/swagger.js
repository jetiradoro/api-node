const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const req = require('require-yml')
const swaggerDocument = req('src/components/api-docs/assets/collection.yml')

// const config = require('../config')

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
	// customfavIcon: '/assets/favicon.ico',
	// customSiteTitle: config.app_name,
	// customCss: '.topbar{display:none}',
}
router.use('/', swaggerUi.serve)
router.get('/', swaggerUi.setup(swaggerDocument, options))

module.exports = router
