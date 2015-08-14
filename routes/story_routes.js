'use strict';

var Story = require('../models/Story');
var bodyparser = require('body-parser');
var eatAuth = require('../lib/eat_auth')(process.env.APP_SECRET);

module.exports = function (router) {
  router.use(bodyparser.json());

  //create route to make stories
  router.post('/stories', eatAuth, function (req, res) {
    //create new story instance
    var newStory = new Story(req.body);
    newStory.authorId = req.user._id;
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
    Story.find({}, function (err, data) {
      if (err) {
        console.log(err);
        return (res.status(500).json({msg: 'internal server error'}));
      }
      // display all stories
      res.json(data);
    });
  });

  // create route to show specific story
  router.get('/stories/:category', function (req, res) {
    var cat = req.params.category.toLowerCase().replace(/\s+/g, '');
    Story.find({'categories': cat}, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(404).json({msg: 'page not found'});
      }
      res.json(data);
    });
  });

  router.get('/stories/showstory/:id', function (req, res) {
    Story.find({'_id': req.params.id}, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(404).json({msg: 'page not found'});
      }
      console.log(data);
      res.json(data);
    });
  });

  router.get('/mystories', eatAuth, function (req, res) {
    Story.find({authorId: req.user._id}, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  });

};
