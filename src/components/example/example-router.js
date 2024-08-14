const router = require("express").Router();
const ExampleController = require("./controllers/ExampleController");

router.get("/", ExampleController.test);
router.get("/test", (req, res) => {
  res.json({ message: "Test" });
});

module.exports = router;
