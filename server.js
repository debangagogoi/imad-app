var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;
var config = {
    user: 'debangagogoi',
    database: 'debangagogoi',
    host: 'db.imad.hasura-ap.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function(req, res) {
    pool.query('SELECT * FROM test', function(err, results){
        if (err){
            res.status(500).send(err.toString());
        } else{
            res.send(JSON.stringify(result));
        }
    })
}
)
