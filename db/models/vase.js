let mongoose = require('mongoose');

let vaseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

let Vase = mongoose.model('Vase', vaseSchema)

Vase.get = (cb) => {
  Vase.find(cb)
}

Vase.show = (id, cb) => {
  Vase.findById(id, cb)
}

Vase.new = (args, cb) => {
  console.log(args)
  const newVase = new Vase({ name: args.name })
  newVase.save(cb)
}

module.exports = Vase
