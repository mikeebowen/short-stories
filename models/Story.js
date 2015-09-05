'use strict';

var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  authorId: mongoose.Schema.ObjectId,
  author: String,
  categories: Array,
  storyTitle: String,
  storyText: String
});

module.exports = mongoose.model('Story', storySchema);

// story data example
// '{"categories": ["fiction", "adventure"], "storyTitle": "Test Title 5", "storyText": "test story text, blah blah blah something something", "eat": ""}'
