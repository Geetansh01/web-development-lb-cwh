const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('This is Geetansh_s Home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('Geetansh loves birds, they are so much fun to watch, play with and learn about')
})

// define the about route
router.get('/contact', (req, res) => {
  res.send('Contact Geetansh on Twitter @geetansh_bhardwaj')
})



module.exports = router