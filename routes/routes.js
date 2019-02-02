let router = require('express').Router();
let VaseController = require('./controllers/vaseController')
let FlowerController = require('./controllers/flowerController')

router.route('/vases')
  .get(VaseController.index)
  .post(VaseController.create);

router.route('/vases/:id')
  .get(VaseController.show);

router.route('/flowers')
  .get(FlowerController.index)
  .post(FlowerController.create);

router.route('/flowers/:id')
  .get(FlowerController.show);



module.exports = router;
