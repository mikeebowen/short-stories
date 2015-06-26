'use strict';

var Story = require('../models/Story');
var bodyparser = require('body-parser');

module.exports = function (router) {
  router.use(bodyparser.json());

  //create route to make stories
  router.post('/stories', function (req, res) {
    //create new story instance
    var newStory = new Story(req.body);
    //save data from req.body as new story
    newStory.save(function (err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });

  // create route to show all stories
  router.get('/stories/showall', function (req, res) {
    var storyArray = [];
    Story.find({}, function (err, data) {
      if (err) {
        console.log(err);
        return (res.status(500).json({msg: 'internal server error'}));
      };
      for (var i = 0; i < data.length; i++) {
        storyArray.push(data[i].storyTitle + data[i].author + data[i].storyText);
      }
      // display all stories
      res.json(storyArray);
    });
  });

  // create route to show specific story
  router.get('/stories/:category', function (req, res) {
    // console.log(res.body.category);
    var cat = req.params.category.toLowerCase().replace(/\s+/g, '');
    Story.find({categories: cat}, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(404).json({msg: 'page not found'});
      }
      res.json(data);
    });
  });

};
