'use strict';

var eat = require('eat');
var User = require('../models/User');

module.exports = function (secret) {
  return function (req, res, next) {
    var token = req.headers.eat || req.body.eat;

    if (!token) {
      console.log('no token in request');
      return res.status(401).json({msg: 'not authorized'});
    }

    eat.decode(token, secret, function (err, decoded) {
      if (err) {
        console.log(err);
        return res.status(401).json({msg: 'not authorized'});
      }

      User.findOne({randomString: decoded.randomString}, function (err, user) {
        if (err) {
          console.log(err);
          return res.status(401).json({msg: 'not authorized'});
        }

        if (!user) {
          console.log(err, 'no user found for that token');
          return res.status(401).json({msg: 'not authorized'});
        }

      req.user = user;
      next();
      });
    });
  };
};
