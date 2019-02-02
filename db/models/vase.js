let { Schema, model } = require('mongoose');

let vaseSchema = Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    flowers: [{ type: Schema.Types.ObjectId, ref: 'Flower' }]
})

let Vase = model('Vase', vaseSchema)

// Vase.show = (id, cb) => {
//   Vase.findById(id, cb)
// }

Vase.new = (args, cb) => {
  const newVase = new Vase({ name: args.name })
  newVase.save(cb)
}
//
// Vase.update = (id, args, cb) => {
//   Vase.findById(id, cb)
// }

module.exports = Vase
