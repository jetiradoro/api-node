const router = require('express').Router()
const redocRouter = require('./redoc')
const swaggerRouter = require('./swagger')

router.get('/assets/:file', (req, res) => {
	res.sendFile(`src/components/api-docs/assets/${req.params.file}`, {root: '.'})
})

router.use('/redoc', redocRouter)
router.use('/swagger', swaggerRouter)

module.exports = router
