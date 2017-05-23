const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Twitter = require('twitter');
require('dotenv').config();

const app = express();
const twit = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

app.use(morgan('tiny'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/tweets/:username', (req, res) => {
  twit
    .get('statuses/user_timeline', {screen_name: req.params.username})
    .then(tweets => {
      res.send({tweets});
    })
    .catch(error => {
      res.status(404).send({error: 'Oh uh, something went wrong'});
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
