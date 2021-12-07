var express = require('express');
var router = express.Router();
var landing = require('../services/landing.js');

/* GET landing listing. */
router.get('/', function(req, res, next) {
  landing.getLandingPage().then(function (collection) {
    res.send(collection);
  }).catch(function (err) {
    res.send(err);
  });
});

module.exports = router;
