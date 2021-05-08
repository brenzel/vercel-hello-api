//index.js
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

let server = express();
server.use(bodyParser.json());
server.use(cors());

server.get('/', function(req, res) {
    res.send("Hello World");
});

module.exports = server;