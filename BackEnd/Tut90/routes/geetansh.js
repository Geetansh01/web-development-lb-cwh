const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Specific middleware for /geetansh');
    next();
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Geetansh home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About Geetansh')
})

module.exports = router