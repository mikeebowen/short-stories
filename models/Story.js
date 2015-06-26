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
// '{"author": "test author 3", "categories": ["fiction", "science fiction", "adventure"], "storyTitle": "Test Title 3", "storyText": "test story text, blah blah blah something something"}'
