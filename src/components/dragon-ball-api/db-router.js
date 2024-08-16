const DBController = require("./controllers/DBController")

const router = require("express").Router()

router.get("/characters", DBController.getCharacters)

module.exports = router