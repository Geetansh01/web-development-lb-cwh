const express = require("express");
var cors = require('cors')
const app = express();
const port = 5000;
const { connectToMongoDB } = require("./DBConnection");
const { startCronSchedule } = require("./server logics/clearDB");

app.use(cors())

const connectionPromise = connectToMongoDB();
connectionPromise.then(() => {
  startCronSchedule(); //Task Scheduler. DB wil be cleared at 12:00 AM IST

  app.use(express.json()) // body-parsing middleware 
  //To populate "request.body", which is undefined by default. See docs : "https://expressjs.com/en/api.html#req.body"

  //API Endpoints
  app.use("/api/notes", require("./routes/notes"));
  app.use("/api/auth", require("./routes/auth"));

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}).catch((err) => {
  console.log(err);
})

