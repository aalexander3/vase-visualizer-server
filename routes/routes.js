let router = require('express').Router();
let vaseController = require('./controllers/vaseController')

router.route('/vases')
  .get(vaseController.index)
  .post(vaseController.new);

router.route('/vases/:id')
  .get(vaseController.show);


// router.route('/flowers')


module.exports = router;
