let express = require('express')
let routes = require('./routes/routes')

const app = express()
let port = process.env.PORT || 8080

app.use('/api', routes)


app.listen(port, function () {
  console.log("Running vase server on port " + port);
});
