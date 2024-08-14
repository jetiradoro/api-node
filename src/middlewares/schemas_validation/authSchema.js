// const {body, checkSchema, validationResult} = require('express-validator')
const config = require('../../config')
const authSchema = {
	Authorization: {
		notEmpty: {
			errorMessage: 'No se ha encontrado el token de autorización',
		},
		custom: {
			options: (value) => {
				const token = config.token
				if (`Bearer ${token}` !== value) return false

				return true
			},
			errorMessage: 'El token es incorrecto!',
		},
	},
}
module.exports = authSchema
