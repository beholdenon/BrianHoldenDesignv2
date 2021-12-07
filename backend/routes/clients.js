var express = require('express');
var router = express.Router();
var clients = require('../services/clients.js');

/* GET clients listing. */
router.get('/', function(req, res, next) {
  clients.getClients().then(function (collection) {
    res.send(collection);
  }).catch(function (err) {
    res.send(err);
  });
});

module.exports = router;
