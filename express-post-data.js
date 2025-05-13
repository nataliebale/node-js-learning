const express = require('express');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json())

const port =const express = require('express');

let app = express();

const port = process.env.PORT || 9999;

app.use('/css', express.static(__dirname + '/public'))

app.get('/css', (req, res, next) => {
  console.log('Middleware');
  next();
})


app.listen(9999);

console.log("it's working");

