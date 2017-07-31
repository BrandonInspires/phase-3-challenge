const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const getDayOfWeek = require('./getDayOfWeek');
const isArray = require('./isArray')

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
  // console.log(req.body);
  // console.log('Array Test:', [1,2,3].every(isArray));
  // console.log('Array Test:', typeof([1,2,3]));
  // console.log(Object.values(req.body));
  
  let flattenedArray = Object.values(req.body).reduce(function(a, b){
    return a.concat(b);
  });
 if (Object.values(req.body).every(isArray)) {
  res.set('Content-Type', 'application/text').status(200).send(`{"result": ${flattenedArray} }`);
 } else {
  res.set('Content-Type', 'application/text').status(400).send(`{"error": "Input data should be of type Array."}`);
 }

});
app.post('/api/array/length', (req, res) => {
  // console.log(req.body);
  // console.log('Array Test:', [1,2,3].every(isArray));
  // console.log('Array Test:', typeof([1,2,3]));
  // console.log(Object.values(req.body));
  
  let flattenedArray = Object.values(req.body).reduce(function(a, b){
    return a.concat(b);
  });
 if (Object.values(req.body).every(isArray)) {
  res.set('Content-Type', 'application/text').status(200).send(`{"result(length)": ${flattenedArray.length} }`);
 } else {
  res.set('Content-Type', 'application/text').status(400).send(`{"error": "Input data should be of type Array."}`);
 }

});



app.listen(port, console.log(`The server is listening on port ${port}`));