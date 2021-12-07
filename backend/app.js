var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');
var landingRouter = require('./routes/landing');
var skillsRouter = require('./routes/skills');
var contactRouter = require('./routes/contact');
var clientsRouter = require('./routes/clients');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/landing', landingRouter);
app.use('/skills', skillsRouter);
app.use('/contact', contactRouter);
app.use('/clients', clientsRouter);

module.exports = app;
