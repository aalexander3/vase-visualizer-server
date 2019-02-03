let { Schema, model } = require('mongoose');

let flowerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  aroma: {
    type: String
  },
  qualities: {
    type: String
  },
  price: {
    type: String
  },
  create_date: {
      type: Date,
      default: Date.now
  },
  vases: [{ type: Schema.Types.ObjectId, ref: 'Vase' }]
})

let Flower = model('Flower', flowerSchema)

Flower.get = (cb) => {
  Flower.find(cb)
}

Flower.show = (id, cb) => {
  Flower.findById(id, cb)
}

Flower.new = (args, cb) => {
  const flower = new Flower({ name: args.name })
  flower.save(cb)
}

// Flower.update = (id, args, cb) => {
//   Flower.findById(id, cb)
// }

module.exports = Flower
