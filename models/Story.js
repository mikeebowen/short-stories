'use strict';

var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  author: String,
  categories: Array,
  storyTitle: String,
  storyText: String
});

module.exports = mongoose.model('Story', storySchema);

// story data example
// '{"author": "test author", "categories": ["fiction", "science fiction"], "storyTitle": "Test Title", "storyText": "test story text, blah blah blah something something"}'
