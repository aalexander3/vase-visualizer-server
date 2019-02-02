Flower = require('../../db/models/flower')
let { standardCallback } = require('./constants')

const FlowerController = {
  index: (req, res) => {
    console.log('starting', req.method, 'from flower controller index')
    Flower.find({}, (err, data) => standardCallback(err, data, res, req))
  },

  create: (req, res) => {
    console.log('starting', req.method, 'from flower controller create')
    Flower.new({ name: req.body.name }, (err, data) => standardCallback(err, data, res, req))
  },

  show: (req, res) => {
    console.log('req id is: ', req.params.id)
    Flower.show(req.params.id, (err, data) => standardCallback(err, data, res, req))
  },
}


module.exports = FlowerController
