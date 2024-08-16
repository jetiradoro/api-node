const router = require("express").Router()
const ExampleRouter = require("./components/example/example-router")
const DocRouter = require("./components/api-docs/routes")

router.get("/", (req, res) => {
  res.json("Bienvenido a la API de Smartfulcode!")
})

router.use('/docs', DocRouter)

router.use("/example", ExampleRouter)

module.exports = router

