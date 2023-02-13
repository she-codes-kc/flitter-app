var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const authMiddleware = require('./lib/authMiddleware')

require('./lib/connectMongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * my API routes
 */

app.use('/api/auth', require('./apps/auth/routes'));
app.use('/api/users', authMiddleware, require('./apps/users/routes'));
app.use('/api/flits', require('./apps/flits/routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // check if its a validation error
  if (err.array) {
    err.status = 422;
    const errorInfo = err.array({ onlyFirstError: true}) [0];
    err.message = `Error in ${errorInfo.location}, param "${errorInfo.param}" ${errorInfo.msg}`
  }

  res.status(err.status || 500);

  // if its an API request, answer with JSON
  if (req.originalUrl.startsWith('/api/')) {
    res.json({ error: err.message });
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
