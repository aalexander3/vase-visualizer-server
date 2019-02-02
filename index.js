let express = require('express')
let routes = require('./routes/routes')
// let { flowerSeeds } = require('./db/seeds/seeds')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

const app = express()

app.use(bodyParser.urlencoded({
   extended: true
}))

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/vase-visualizer', { useNewUrlParser: true })

let db = mongoose.connection

let port = process.env.PORT || 8080

app.use('/api', routes)

app.listen(port, function () {
  console.log("Running vase server on port " + port);
});
