const {validationResult} = require('express-validator')
const {failValidationResponse} = require('../services/ResponseService')

const paramsMiddleware = (req, res, next) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return failValidationResponse(res, errors, 400)
	}
	next()
}

module.exports = paramsMiddleware
