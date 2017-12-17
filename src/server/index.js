const express = require('express');
const app = express();
var pg = require('pg');

require('dotenv').config();

const ENV         = process.env.ENV || 'development';
const knexConfig  = require('../../knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

var config = {
  user: 'labber',
  database: 'odd_radio',
  password: 'labber',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};


const pool = new pg.Pool(config);

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.use(knexLogger(knex));

app.get('/api/stations', (req, res) => {
  knex.select().from('stations').then((stations) => {
    res.json(stations);
  });
})

app.get('/api/stations/:id', (req, res) => {
  knex.select().from('stations').where({name: req.params.id}).then((station) => {
    res.json(station);
  });
})

app.get('/db', function (request, response) {
  pool.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});


app.listen(process.env.PORT || 3000) //listens on port 3000 -> http://localhost:3000/
console.log('listening on port env.PORT or 3000');