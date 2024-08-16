const router = require('express').Router()
const redoc = require('redoc-express')

router.get('/spec/:file', (req, res) => {
	res.sendFile(`src/components/api-docs/assets/${req.params.file}`, {root: '.'})
})

router.get(
	'/',
	redoc({
		title: 'API NodeJs Template',
		specUrl: '/docs/redoc/spec/collection.yml',
	})
)

module.exports = router
