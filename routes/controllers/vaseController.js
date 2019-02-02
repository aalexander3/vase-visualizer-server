Vase = require('../../db/models/vase')
// index, show, create

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
  // console.log(req)
  Vase.new({ name: req.body.name }, (err, vase) => {
    res.json({
      message: 'New vase created!',
      data: vase
    })
  })
}

exports.show = (req, res) => {
  console.log('req id is: ', req.params.id)

  Vase.show(req.params.id, (err, vase) => {
    res.json({
      message: 'heres the vase!',
      data: vase
    })
  })
}
