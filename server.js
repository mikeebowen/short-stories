'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var time = new Date();
var db = mongoose.connection;
var passport = require('passport');
// create instances of express router
var storyRoutes = express.Router();
var usersRoutes = express.Router();

process.env.APP_SECRET = process.env.APP_SECRET || 'change this change this change this!!!!!';

db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', function () {
  console.log('database connection made');
});

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/stories_development');

app.use(express.static(__dirname + '/build'));

require('./lib/passport_strat')(passport);
require('./routes/story_routes')(storyRoutes);
require('./routes/auth_routes')(usersRoutes, passport);

app.use('/api', storyRoutes);
app.use('/api', usersRoutes);

app.get('/', function (req, res) {
  res.send('Server can load a page');
});

app.listen(port, function() {
  console.log('Server started on port: ' + port + '\n' + time);
});
