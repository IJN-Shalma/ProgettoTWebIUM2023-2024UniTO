const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sqlRouter = require('./routes/sql');
const mongoRouter = require('./routes/mongo');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const root = path.join(__dirname, 'client', 'build');
app.use(express.static(root));

app.use('/sql/', sqlRouter);
app.use('/mongo/', mongoRouter);

app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // send error json
  res.status(err.status || 500);
  res.json({'error':err.message});
});

module.exports = app;
