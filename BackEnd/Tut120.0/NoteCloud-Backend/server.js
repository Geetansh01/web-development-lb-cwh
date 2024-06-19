const express = require("express");
const app = express();
const port = 3000;
const { connectToMongoDB } = require("./DBConnection");

connectToMongoDB();

//API Endpoints
app.use("/api/notes", require("./routes/notes"));
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
