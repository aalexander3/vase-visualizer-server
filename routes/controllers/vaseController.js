Vase = require('../../db/models/vase')
let { standardCallback } = require('./constants')

const VaseController = {
  index: (req, res) => {
    console.log('starting', req.method, 'from vase controller index')
    Vase.find({}, (err, data) => standardCallback(err, data, res, req))
  },

  create: (req, res) => {
    console.log('starting', req.method, 'from vase controller create')
    Vase.new({ name: req.body.name }, (err, data) => standardCallback(err, data, res, req))
  },

  show: (req, res) => {
    console.log('req id is: ', req.params.id)
    Vase.show(req.params.id, (err, data) => standardCallback(err, data, res, req))
  },

  update: (req, res) => {
    // add flower to vase functionality
    // flowerId, vaseId
    // find the vase
    // find the flower ref
    // push the flower onto the vase
  }
}


module.exports = VaseController
