var express = require('express');
var router = express.Router();
var projects = require('../services/projects.js');

/* GET projects listing. */
router.get('/', function(req, res, next) {
  projects.getProjects().then(function (collection) {
    res.send(collection);
  }).catch(function (err) {
    res.send(err);
  });
});

module.exports = router;
