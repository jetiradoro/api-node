const router = require("express").Router();
const ExampleController = require("./controllers/ExampleController");

router.get("/", ExampleController.test);

module.exports = router;
