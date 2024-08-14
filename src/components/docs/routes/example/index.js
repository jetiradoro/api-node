const router = require('express').Router()
const controllers = require('../../controllers/FactoryController')
const {checkSchema} = require('express-validator')
const schemas = require('../../middlewares/schemas_validation/factorySchemas')
const middlewares = require('../../middlewares/factory_middlewares')

router.get('/', controllers.ExampleCtrl.getAll)
router.get('/:id', checkSchema(schemas.checkIdSchema), middlewares.paramsMiddleware, controllers.ExampleCtrl.getById)

module.exports = router
