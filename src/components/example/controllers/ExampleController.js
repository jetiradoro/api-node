const {
  successResponse,
  failResponse,
} = require("../../../libs/ResponseService");
const { ApiError } = require("../../../exceptions/errors");
const ExampleService = require("../services/ExampleService");

const ExampleController = {
  test: async (req, res) => {
    try {
      const result = ExampleService.testProcess();
      successResponse(res, result);
    } catch (e) {
      failResponse(res, e);
    }
  },
};

module.exports = ExampleController;
