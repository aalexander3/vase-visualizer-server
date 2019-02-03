let mongoose = require('mongoose');
const Flower = require('../models/flower')
const Vase = require('../models/vase')

console.log('running seed file')
// connect to the db
mongoose.connect('mongodb://localhost/vase-visualizer', { useNewUrlParser: true })
// Delete all flowers and vases prior to seeding!
Flower.deleteMany(()=> console.log('deleted flower'))
Vase.deleteMany(()=> console.log('deleted vases'))

Flower.create([
  { name: "Tulip", price: '$1.80', aroma: 'sweet-smelling', qualities: 'egg shaped, elegant, symmetrical, colorful', image: "https://images.unsplash.com/photo-1539997553090-d4c936b1bbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" },
  { name: "Crocus", price: '$1.00', aroma: 'freshly cut hay', qualities: 'variety of bright colors, narrow, grass-like foliage.', image: "https://images.unsplash.com/photo-1544566192-beb63d52de02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1965&q=80" },
  { name: "Orchid", price: '$2.00', aroma: 'strong, spicy vanilla', qualities: 'three petals, three sepals, tall, waxy column', image: "https://images.unsplash.com/photo-1538031284996-0a5edac64de2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1609&q=80" },
  { name: "Snowdrop", price: '$0.95', aroma: 'fresh, green floral', qualities: 'white, low-hanging, drop', image: "https://images.unsplash.com/photo-1490661632052-a8a414bf5f63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" },
  { name: "Rose", price: '$1.50', aroma: 'nasturtium and lemon.', qualities: 'thick, luscious, gorgeous, velvety', image: "https://images.unsplash.com/photo-1512045519129-eb9ceb788555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" } ])
  .finally(() => {
    console.log('bye')
    mongoose.connection.close();
  })
// disconnect


//end
