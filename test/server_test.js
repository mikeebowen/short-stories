'use strict';

process.env.MONGOLAB_URI = 'mongodb://localhost/stories_test';
require('../server.js');

var fs = require('fs');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
var Story = require('../models/Story');

chai.use(chaihttp);

require('../server.js');

describe('Test Story Routes', function (done) {

  // dump test database
  // after(function (done) {
  //   mongoose.connection.db.dropDatabase(function () {
  //     done();
  //   });
  // });

  it('should create a new story with a post request', function (done) {
    chai.request('localhost:3000')
    .post('/api/stories')
    .send({author: 'test author', categories: ['fiction', 'science fiction'], storyTitle: 'Test Title', storyText: 'test story text, blah blah blah something something'})
    .end(function (err, res) {
      expect(err).to.eql(null);
      expect(res.body.author).to.eql('test author');
      expect(res.body.categories).to.be.an('array');
      expect(res.body.storyTitle).to.eql('Test Title');
      expect(res.body.storyText).to.eql('test story text, blah blah blah something something');
      done();
    });
  });

});
