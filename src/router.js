const router = require("express").Router()
const ExampleRouter = require("./components/example/example-router")
const DocRouter = require("./components/api-docs/routes")
const authSchema = require("./middlewares/schemas_validation/authSchema")
const authMiddleware = require("./middlewares/authMiddleware")
const dbRouter = require("./components/dragon-ball-api/db-router")

router.get("/", (req, res) => {
  res.json("Bienvenido a la API de Smartfulcode!")
})

router.use('/docs', DocRouter)

router.use("/example", 
  authSchema,
  authMiddleware,
  ExampleRouter)

router.use("/dragon-ball", 
  authSchema,
  authMiddleware,
  dbRouter)

router.use

module.exports = router

