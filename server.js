'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var time = new Date();
var db = mongoose.connection;
