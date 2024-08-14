const router = require("express").Router();
const ExampleRouter = require("./components/example/example-router");

router.get("/", (req, res) => {
  res.json("Bienvenido a la API de Smartfulcode!");
});

router.use("/example", ExampleRouter);

module.exports = router;
