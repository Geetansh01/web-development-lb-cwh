const http = require('http');
const express = require('express');
const { Server } = require("socket.io");
const { Socket } = require('dgram');

const app = express();
const server = http.createServer(app);

/* Socket.IO */
const io = new Server(server); 
// In Socket.IO we have many sockets:
// client: he is called a socket (the "socket" variable in below line represents a client)
// server: this is us and we are also a socket
io.on("connection", (socket)=>{
  console.log('A new user has connected with socket ID: ', socket.id);
  socket.on("user-message", (message)=>{ // whenever a socket (i.e a client) emits a "user-message" event, run the provided callback 
    console.log("Message from user socket: ", message);

    // emit the "message" to all clients
    io.emit("message-from-server", message)
  })
});

/* So express handles all HTTP requests */
app.get('/', (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname }); //Relative Path
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

/*
Why did we not do:

  app.listen(3000, () => {...});

Internally, this:
  const app = express();
  app.listen(3000, () => {...});

is roughly equivalent to:

  const app = express();
  const http = require('node:http');

  const server = http.createServer(app);
  server.listen(3000);

The difference is transparency:
  - Using app.listen(), you don’t have a reference to the raw HTTP server object.

  - If you need to attach Socket.IO or WebSocket support, you need the actual server object — hence the explicit createServer(app) is used here!

*/