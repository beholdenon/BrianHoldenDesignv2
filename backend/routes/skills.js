var express = require('express');
var router = express.Router();
var skills = require('../services/skills.js');

/* GET skills listing. */
router.get('/', function(req, res, next) {
  skills.getSkills().then(function (collection) {
    res.send(collection);
  }).catch(function (err) {
    res.send(err);
  });
});

module.exports = router;
