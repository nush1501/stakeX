// - server.js
const express = require('express');
const socketIo  = require('socket.io');
const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


// load environment variables
dotenv.config();


// initialize express app and server
const app = express();
const server = http.createServer(app);

// set up websocket (socket.io)
const io = socketIo(server);


// middleware for parsing json
app.use(express.json);


// database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {console.log("Connected!")})
.catch((err) => {console.log(err)});


// basic route
app.get("/", (req, res) => {
    res.send('Welcome to the server');
});

// socket.io event (example for real time communication)
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
});

// start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})