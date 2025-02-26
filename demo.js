'use strict';

var express = require('express');
var authorization = require('./index.js');

var app = express();

app.get(
  '/api/foo',
  function (req, res, next) {
    req.user = {};
    req.user.roles = ['user'];
    next();
  },
  authorization({ methods: ['GET'], roles: ['admin'] }),
  function (req, res) {
    res.sendStatus(200);
  }
);

app.get(
  '/api/bar',
  function (req, res, next) {
    req.user = {};
    req.user.roles = ['user'];
    next();
  },
  authorization({ methods: ['GET'], roles: ['admin', 'user'] }),
  function (req, res) {
    res.sendStatus(200);
  }
);

app.listen(3000);
