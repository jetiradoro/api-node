const router = require('express').Router()
const redoc = require('redoc-express')
const path = require('path')

router.get('/spec/:file', (req, res) => {
	res.sendFile(path.resolve(__dirname,`../assets/${req.params.file}`))
})

router.get(
	'/',
	redoc({
		title: 'API NodeJs Template',
		specUrl: '/docs/redoc/spec/collection.yml',
	})
)

module.exports = router
