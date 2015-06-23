'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var time = new Date();
var db = mongoose.connection;
var storyRoutes = express.Router();

db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', function () {
  console.log('database connection made');
});

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/stories_development');

require('./routes/story_routes')(storyRoutes);

app.use('/api', storyRoutes);

app.get('/', function (req, res) {
  res.send('Server can load a page');
});

app.listen(port, function() {
  console.log('Server started on port: ' + port + '\n' + time);
});
