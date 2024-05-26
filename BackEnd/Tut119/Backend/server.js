import express from "express";
import cors from 'cors';
const app = express();
const port = 3000;

// Use cors middleware
//This is needed bcz i will be making POST requests on this server from my vite app which is on a different origin
//So, my server should allow Requests from different origin than the server's own
app.use(cors());

// This middleware is used to parse JSON bodies
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const receivedData = req.body;
  res.send({msg: "Data Received By Server 👍", ...receivedData});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
