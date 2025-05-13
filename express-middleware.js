const express = require('express');

let app = express();

const port = process.env.PORT || 9999;

app.use('/css', express.static(__dirname + '/public'))

app.get('/css', (req, res, next) => {
  console.log('Middleware');
  next();
})

app.get('/', (req, res) => {
  res.send(`
  <html lang="en">
<head>
  <title>sample html</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, beatae commodi esse excepturi
  exercitationem impedit incidunt laudantium nihil placeat quae quaerat quam quasi ratione rem tempora, unde voluptatem
  voluptatibus?
</p>
</body>
</html>
`);
})


app.listen(9999);

console.log("it's working");
