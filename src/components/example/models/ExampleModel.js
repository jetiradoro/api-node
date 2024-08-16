const Model = require("../../../models/Model")
const ExampleModel = class extends Model {
  static table = "users"
}

module.exports = ExampleModel
