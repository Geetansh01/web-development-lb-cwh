const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('This is Soham_s Home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('Soham loves birds, they are so much fun to watch, play with and learn about')
})

// define the about route
router.get('/contact', (req, res) => {
  res.send('Contact Soham on Twitter @soham_kamani')
})


module.exports = router
