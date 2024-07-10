const express = require("express");
const app = express();
const port = 5000;
const { connectToMongoDB } = require("./DBConnection");

connectToMongoDB();

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
