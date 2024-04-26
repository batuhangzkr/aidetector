const express = require('express');
const path = require('path');
const server = express();


server.use(express.static('.'));

server.get('/', function(req, res) {

  res.sendFile(path.join(__dirname, 'index.html'));
});
require('./App');
const port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});
