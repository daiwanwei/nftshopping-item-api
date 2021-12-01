var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./contractEvents/creation');

var app = express();

const expressJSDocSwagger = require('express-jsdoc-swagger');
const swagger=require("./pkg/swagger")
expressJSDocSwagger(app)(swagger.options);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const routers=require("./routers")
app.use('/api/creation', routers.creationRouter);
app.use('/api/erc721', routers.erc721Router);
app.use('/api/contract', routers.contractRouter);
app.use('/api/contractManager', routers.contractManagerRouter);
app.use('/api/item', routers.itemRouter);
app.use('/api/order', routers.orderRouter);
app.use('/api/factory', routers.factoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
