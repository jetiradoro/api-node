// const {body, checkSchema, validationResult} = require('express-validator')
const checkId = {
  id: {
    notEmpty: {
      errorMessage: "No se ha encontrado parámetro id de actualización",
    },
    isInt: {
      errorMessage: "El id debe ser numérico",
    },
  },
}
module.exports = checkId
