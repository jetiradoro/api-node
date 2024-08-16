const config = require("../config")
const util = require("util")
const helpers = require("../helpers/utils")

const LogService = {
  /**
   * Show logs if are enabled in config
   * @param payload
   * @param forced
   */
  log(payload, forced = false, is_error = false) {
    if (config.enable_logs || forced) {
      if (is_error) {
        console.error(util.inspect(payload, false, null, true))
      } else {
        console.log(util.inspect(payload, false, null, true))
      }
    }
  },
  error(message, forced = false) {
    if (config.enable_logs || forced) {
      console.error(util.inspect(message, false, null, true))
    }
  },
  logError(error, forced = false) {
    const error_msg = helpers.parseAxiosError(error)
    LogService.log(error_msg, forced, true)
  },
}

module.exports = LogService
