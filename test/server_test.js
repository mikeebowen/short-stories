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
  //create test story before each test to do tests on
  beforeEach(function (done) {
    var testStory = new Story({author: 'test author 2', categories: ['fiction', 'sciencefiction', 'adventure'], storyTitle: 'Test Title 2', storyText: 'test story text, blah blah blah something something'});

    testStory.save(function (err, data) {
      if (err) {
        throw err;
      }

      this.testStory = data;
      done();
    }.bind(this));
  });

  // dump test database
  after(function (done) {
    mongoose.connection.db.dropDatabase(function () {
      done();
    });
  });

  it('should create a test story in a beforeEach block', function () {
    expect(this.testStory.author).to.eql('test author 2');
  })

  it('should create a new story with a post request to /api/stories', function (done) {
    chai.request('localhost:3000')
    .post('/api/stories')
    .send({author: 'test author', categories: ['fiction', 'sciencefiction'], storyTitle: 'Test Title', storyText: 'test story text, blah blah blah something something'})
    .end(function (err, res) {
      expect(err).to.eql(null);
      expect(res.body.author).to.eql('test author');
      expect(res.body.categories).to.be.an('array');
      expect(res.body.storyTitle).to.eql('Test Title');
      expect(res.body.storyText).to.eql('test story text, blah blah blah something something');
      done();
    });
  });

  it('should show all stories on get request to /api/stories/showall', function (done) {
    chai.request('localhost:3000')
    .get('/api/stories/showall')
    .end(function (err, res) {
      expect(err).to.eql(null)
      expect(Array.isArray(res.body)).to.eql(true);
      expect(res.body[0].author).to.eql('test author 2');
      expect(res.body[0].categories).to.be.an('array');
      expect(res.body[0].storyTitle).to.eql('Test Title 2');
      expect(res.body[0].storyText).to.eql('test story text, blah blah blah something something');
      done();
    });
  });

  it('should show stories by category', function (done) {
    chai.request('localhost:3000')
    .get('/api/stories/fiction')
    .end(function (err, res) {
      expect(err).to.eql(null)
      expect(Array.isArray(res.body)).to.eql(true);
      expect(res.body[0].author).to.eql('test author 2');
      expect(res.body[0].categories).to.be.an('array');
      expect(res.body[0].storyTitle).to.eql('Test Title 2');
      expect(res.body[0].storyText).to.eql('test story text, blah blah blah something something');
      done();
    });
  });

  it('should find a story by id', function (done) {
    chai.request('localhost:3000')
    .get('/api/stories/showstory/' + this.testStory._id)
    .end(function (err, res) {
      expect(err).to.eql(null)
      expect(Array.isArray(res.body)).to.eql(true);
      expect(res.body[0].author).to.eql('test author 2');
      expect(res.body[0].categories).to.be.an('array');
      expect(res.body[0].storyTitle).to.eql('Test Title 2');
      expect(res.body[0].storyText).to.eql('test story text, blah blah blah something something');
      done();
    });
  });

});
