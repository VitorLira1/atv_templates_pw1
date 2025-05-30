
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var dataRouter = require('./routes/data');
var usersRouter = require('./routes/users');
var signinRouter = require('./routes/signin')
var signupRouter = require('./routes/signup')
var useridRouter = require('./routes/userid')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Bootstrap
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter)
app.use('/data', dataRouter)
app.use('/users', usersRouter);
app.use('/users/signin', signinRouter)
app.use('/users/signup', signupRouter)
app.use('/users/:userid', useridRouter)

// catch 404 and forward to error handler
app.use((req, res) => {
    res.status(404).send(`
        <h1>Error 404 - Page Not Found</h1>
        <p><a href='/'> Back to Root </a></p>
        `)
})

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
