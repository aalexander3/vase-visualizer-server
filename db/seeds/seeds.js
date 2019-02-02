let mongoose = require('mongoose');
const Flower = require('../models/flower')
const Vase = require('../models/vase')

console.log('running seed file')
// connect to the db
mongoose.connect('mongodb://localhost/vase-visualizer', { useNewUrlParser: true })
// Delete all flowers and vases prior to seeding!
Flower.deleteMany(()=> console.log('deleted flower'))
Vase.deleteMany(()=> console.log('deleted vases'))

Flower.create([{ name: "Tulip" },{ name: "Crocus" }, { name: "Orchid" }, { name: "Snowdrop" }, { name: "Rose" } ])
  .finally(() => {
    console.log('bye')
    mongoose.connection.close();
  })
// disconnect


//end
