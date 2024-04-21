const express = require('express')
const geetansh = require("./routes/geetansh")
const app = express()

app.use("/geetansh", geetansh)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000')
})

