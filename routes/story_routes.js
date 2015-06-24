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

};
