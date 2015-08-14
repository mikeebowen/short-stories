'use strict';

var User = require('../models/User');
var bodyparser = require('body-parser');

function makeRandomString () {
  var outputString = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<,>.?/';
  var randomNumber = Math.ceil(Math.random() * 10) + 10;
  for ( var i = 0; i < randomNumber; i++ ) {
    outputString += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return outputString;
}

module.exports = function (router, passport) {
  router.use(bodyparser.json());

  // route to show all users, just for testing purposes
  router.get('/showusers', function (req, res) {
    User.find({}, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      };
      // respond with the data
      res.json(data);
    });
  });

  // route to create user
  router.post('/createuser', function (req, res) {
    // make copy of user data from body
    var newUserData = JSON.parse(JSON.stringify(req.body));
    // delete the email and pw from the newUserData object
    delete newUserData.email;
    delete newUserData.password;
    // create new user object newUserData
    var newUser = new User(newUserData);
    newUser.randomString = makeRandomString();
    newUser.basic.email = req.body.email;
    newUser.generateHash(req.body.password, function (err, hash) {
      // handle errors
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      };
      newUser.basic.password = hash;
    });
    // save new user
    newUser.save(function (err, user) {
      // handle error
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'Could not create user'});
      };
      // generate token
      user.generateToken(process.env.APP_SECRET, function (err, token) {
        if (err) {
          console.log(err);
          return res.status(500).json({msg: 'error generating token'});
        };
        // respond with json of token
        res.json({token: token});
      });
    });
  });

  // create sign in route
  router.get('signin', passport.authenticate('basic', {session: false}), function (req, res) {
    req.user.generateToken(process.env.APP_SECRET, function (err, token) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'error generating token'});
      };
      res.json({token: token});
    });
  });
};
