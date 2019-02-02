let express = require('express')
let routes = require('./routes/routes')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({
   extended: true
}))

app.use(bodyParser.json())

app.use(cors())

mongoose.connect('mongodb://localhost/vase-visualizer', { useNewUrlParser: true })

let db = mongoose.connection

let port = process.env.PORT || 8080

app.use('/api', routes)

app.listen(port, function () {
  console.log("Running vase server on port " + port);
});
