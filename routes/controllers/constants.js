exports.standardCallback = (error, data, res, req) => {
  if (error) {
    res.json({
        status: "error",
        error
    })
  }
  res.json({
    status: "success",
    data
  })
} 
