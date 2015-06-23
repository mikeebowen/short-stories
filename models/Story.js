'use strict';

var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  author: String,
  storyTitle: String,
  storyText: String
});

module.exports = mongoose.model('Story', storySchema);
