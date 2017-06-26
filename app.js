let express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    nconf = require('nconf');

module.exports = nconf;

nconf.argv()
    .env()
    .file({ file: './resources/config_properties.json' });

const dbConnection = mysql.createConnection({
    host: nconf.get('database:dbUrl'),
    port: nconf.get('database:dbPort'),
    user: nconf.get('database:dbUser'),
    password: nconf.get('database:dbPassword'),
    database: nconf.get('database:dbBase')
});
const app = express();
const index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', index);
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


// API methods for get all films
app.get('/api/allFilms', function (req, res) {
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("SELECT * FROM cinema_archive", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});


// API methods for add film
app.get('/api/addFilm/:filmName/:filmYear/:filmFormat/:actors', function(req, res) {
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("INSERT INTO cinema_archive (name, produce_year, video_format, actors)  VALUES ('"+ req.params.filmName +"', "+ req.params.filmYear +", '"+ req.params.filmFormat +"', '"+ req.params.actors +"')", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/api/addFilm/:filmName/:filmYear/:filmFormat/:actors', function(req, res) {
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("INSERT INTO cinema_archive (name, produce_year, video_format, actors)  VALUES ('"+ req.params.filmName +"', "+ req.params.filmYear +", '"+ req.params.filmFormat +"', '"+ req.params.actors +"')", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

// API methods for delete film by film id
app.get('/api/deleteFilm/:id', function (req, res){
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("DELETE FROM cinema_archive WHERE id =" + req.params.id, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/api/deleteFilm/:id', function (req, res){
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("DELETE FROM cinema_archive WHERE id =" + req.params.id, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

// API methods for search film by film id
app.get('/api/findFilmById/:id', function(req, res) {
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("SELECT * FROM cinema_archive WHERE id =" + req.params.id, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

// API methods for search film by film name
app.get('/api/findFilmByName/:filmName', function(req, res) {
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("SELECT * FROM cinema_archive ca WHERE ca.name LIKE '" + req.params.filmName + "%'", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});


// API methods for search film by actor name
app.get('/api/findFilmByActorName/:actorName', function(req, res) {
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("SELECT * FROM cinema_archive ca WHERE ca.actors LIKE '" + req.params.actorName + "%'", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

// API methods for flexible search film by actor name/film name/release year
app.get('/api/flexibleSearch/:searchParam', function(req, res) {
    if (!dbConnection.state.includes('authenticated')) {
        dbConnection.connect(function (err) {
            if (err) throw err;
        });
    }
    dbConnection.query("SELECT * FROM cinema_archive ca WHERE ca.name LIKE '"+ req.params.searchParam + "%'" + " OR ca.actors LIKE '" + req.params.searchParam + "%'" + " OR ca.produce_year LIKE '" + req.params.searchParam + "%'", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
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