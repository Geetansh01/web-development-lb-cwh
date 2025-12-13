const http = require('http');
const express = require('express');
const { Server } = require("socket.io");
const { instrument } = require('@socket.io/admin-ui');

const app = express();

// Serve static files from 'public' directory
app.use(express.static('public'));

const server = http.createServer(app);


/* Socket.IO */
const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true
  }
}); 

// SocketIO Admin UI
instrument(io, {auth: false}); // Here, the Admin UI has no authentication

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

  /* Send message to specific user */
  socket.on("user-message-to-specific-client", (specific_socket_id, message) => {
    socket.to(specific_socket_id).emit("message-from-server", message);
  })

  /* Join a Specific Room */
  socket.on("join-room", (room_id, callback_from_client) => {
    socket.join(room_id);
    callback_from_client(`Message from Server: Joined Room ${room_id}`)
  })

  socket.on("ping", (count) => {
    console.log(count);
  })
});

/* Separate Namespace in SocketIO */
const adminIo = io.of("/admin");

// Adding middleware to a namespace
// This is an authentication middleware only attached on "/admin" namespace
adminIo.use((socket, next) => {
  if(socket.handshake.auth.token === "MyAuthToken"){
    socket.username = "Geetansh"; // In reality you may fetch it from DB
    next()
  }
  else{
    console.log('A user without valid auth Token Tried to connect!');
    next(new Error("Please send valid auth-token"))
  }
})

adminIo.on("connection",  (socket)=>{
  console.log('A new ADMIN has connected with socket ID: ', socket.username);
})

/* So express handles all HTTP requests */
app.get('/', (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname }); //Relative Path
});
app.get('/admin', (req, res) => {
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