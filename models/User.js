'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var eat = require('eat');

var userSchema = mongoose.Schema({
  userName: String,
  randomString: String;
  basic: {
    email: {type: String, unique: true},
    password: String
  }
});

userSchema.methods.generateHash = function (password, callback) {
  bcrypt.genSalt(8, function (err, salt) {
    // handle error
    if (err) {
      return res.status(500).json({msg: 'internal server error'});
    };
    // pass the password, salt and callback function into bcrypt hash method
    bcrypt.hash(password, salt, null, function (err, hash) {
      // handle error
      if (err) {
        return res.status(500).json({msg: 'internal server error'});
      };
      callback(null, hash);
    });
  });
};

userSchema.methods.checkPassword = function (password, callback) {
  // compare password
  bcrypt.compare(password, this.basic.password, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json({msg: 'internal server error'});
    };
    callback(null, result);
  });
};

userSchema.methods.generateToken = function (secret, callback) {
  eat.encode({randomString: this.randomString}, secret, callback);
};

module.exports = mongoose.model('User', userSchema);

//{email: 'test1@example.com', password: 'password123', username: 'test user1'}
