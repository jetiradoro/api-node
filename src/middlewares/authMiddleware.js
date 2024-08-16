const { validationResult } = require("express-validator")
const { unauthorizedResponse} = require('../libs/ResponseService')

const authMiddleware = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return unauthorizedResponse(res, errors, 401)
  }
  next()
}

module.exports = authMiddleware
