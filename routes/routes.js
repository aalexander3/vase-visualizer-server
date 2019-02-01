let router = require('express').Router();
let vaseController = require('./controllers/vaseController')



router.get('/vases', vaseController.index)
router.post('/vases', vaseController.new)
router.get('/vases/:id', vaseController.find)

module.exports = router;
