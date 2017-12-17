const express = require('express');
const app = express();

require('dotenv').config();

const ENV         = process.env.ENV || 3000;
const knexConfig  = require('../../knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

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


app.listen(3000); //listens on port 3000 -> http://localhost:3000/
console.log('listening on port 3000');