const express = require('express')
const app = express()
const geetansh = require("./routes/geetansh")
const soham = require("./routes/soham")
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//To organise all routes after "/geetansh" in a single file
app.use("/geetansh", geetansh)

//To organise all routes after "/soham" in a single file
app.use("/soham", soham)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})