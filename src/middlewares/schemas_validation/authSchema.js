const config = require("../../config")
const { header } = require("express-validator")

module.exports = [
  header(
    "Authorization",
    "No se ha encontrado el token de autorización"
  ).notEmpty(),
  header("Authorization").custom((value) => {
    if (!["ERROR", "INFO", "RECOVERY"].includes(value)) {
      const token = config.token
      if (`Bearer ${token}` !== value) {
        throw new Error(`El token es incorrecto!`)
      }
      return true
    }
    return true
  }),
]
