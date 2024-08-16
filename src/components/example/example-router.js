const router = require("express").Router()
const authSchema = require("../../middlewares/schemas_validation/authSchema")
const ExampleController = require("./controllers/ExampleController")
const authMiddleware = require("../../middlewares/authMiddleware")

router.get("/", 
  authSchema,
  authMiddleware,
  ExampleController.test)


module.exports = router
