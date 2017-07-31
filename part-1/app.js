const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const getDayOfWeek = require('./getDayOfWeek');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/days/:day', (req, res) => {
 let day = getDayOfWeek(req.params.day);
  //  res.set('Content-Type', 'application/text');
  //  res.status(200).send(`${day}`);
  if (typeof(day) === 'number') {
  res.set('Content-Type', 'application/text').status(200).send(`${day}`);   
  } else {
  res.set('Content-Type', 'application/text').status(400).send(`${day}`);   
  }
})

app.post('/api/array/concat', (req, res) => {
  console.log(req.body);
  res.send(`request.body:: ${req.body}`);
});

app.listen(port, console.log(`The server is listening on port ${port}`));