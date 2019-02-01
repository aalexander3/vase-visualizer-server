Vase = require('../../db/models/vase')


exports.index = (req, res) => {
  console.log('starting', req.method, 'from vase controller index')

  Vase.get((err, vases) => {
    if (err) {
      res.json({
          status: "error",
          message: err,
      });
    }
    res.json({
       status: "success",
       message: "vases retrieved successfully",
       data: vases
     })
  })
}

exports.new = (req, res) => {
  console.log('starting', req.method, 'from vase controller index')
}

exports.find = (req, res) => {
  console.log('req id is: ', req.params.id)

  Vase.get((err, vase) => {
    if (err) {
      res.json({
          status: "error",
          message: err,
      });
    }
    res.json({
       status: "success",
       message: "found vase: ",
       data: vase
     })
  }, 1)
}
