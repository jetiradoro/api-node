const responseService = {
  successResponse: (res, data = "", message = "") => {
    const response = {
      status: "success",
      message,
      data,
    }
    res.json(response)
  },

  failResponse: (res, errorObject, errors = []) => {
    console.log(errorObject)
    const response = {
      status: "error",
      message: errorObject.message,
      errors,
    }

    if (errorObject.sqlMessage) {
      response.message = "Error in database process"
      response.errors = [errorObject.sqlMessage]
    }

    res.status(errorObject.statusCode ? errorObject.statusCode : 400)
    res.json(response)
  },

  failValidationResponse: (res, errors = []) => {
    const mapErrors = []
    errors.array().map((err) => mapErrors.push(err.msg))
    const response = {
      status: "error",
      message: "Validation request error",
      errors: mapErrors,
    }
    console.log(mapErrors)
    res.status(400)
    res.json(response)
  },

  unauthorizedResponse: (res, errors = []) => {
    const mapErrors = []
    errors.array().map((err) => mapErrors.push(err.msg))
    const response = {
      status: "error",
      message: "Unauthorized token request",
      errors: mapErrors,
    }
    console.log(mapErrors)
    res.status(401)
    res.json(response)
  },
}

module.exports = responseService
