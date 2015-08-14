'use strict';

var Basic = require('passport-http').BasicStrategy;
var User = require('../models/User');

module.exports = function (passport) {
  passport.use('basic', new Basic({}, function (email, password, done) {
    User.findOne({'basic.email': email}, function (err, user) {
      if (err) {
        return done('database error');
      };
      if (!user) {
        return done('user does not exist');
      };

      user.checkPassword(password, function (err, result) {
        if (err) {
          console.log(err);
          return res.status(500).json({msg: 'internal server error'});
        };
        if (!result) {
          return res.status(401).jsone({msg: 'incorrect password'});
        };
        if (result) {
          return done(null, user);
        };
        return res.status(500).json({msg: 'internal server error'});
      });
    });
  }));
};
