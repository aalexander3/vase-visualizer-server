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

let Vase = module.exports = mongoose.model('vase', vaseSchema)

module.exports.get = (callback, limit) => {
  Vase.find(callback).limit(limit);
}
