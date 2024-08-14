const router = require('express').Router()
const redoc = require('redoc-express')

router.get('/spec/:file', (req, res) => {
	res.sendFile(`src/api/${req.params.file}`, {root: '.'})
})

router.get(
	'/',
	redoc({
		title: 'Innobox Api Docs',
		specUrl: '/api/docs/redoc/spec/collection.yml',
	})
)

module.exports = router
