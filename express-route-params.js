const express = require('express');

let app = express();

const port = process.env.PORT || 9999;

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/post/:id', (req, res) => {
  res.send(
    `
      <p>Here is ${req.params.id}</p>
    `
  )
})

app.get('/post/:id/category/:category_id', (req, res) => {
  res.send(
    `
      <p>Here is ${req.params.id}</p>
      <p>Here is ${req.params.category_id}</p>
    `
  )
})

app.listen(9999);

console.log("it's working");
