let router = require('express').Router();

const index = (req, res) => {
  console.log('started', req.method, 'in index')
  return res.json({
    status: 'success',
    message: "ya did it"
  })
}

router.get('/', index)



module.exports = router;
