const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pizza Express';

app.set('view engine', 'jade');

app.locals.pizza = {};

app.get('/', (request, response) => {
  response.render('index');
});

app.post('/pizzas', (request, response) => {
  response.sendStatus(201);
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;
