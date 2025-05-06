const https = require('https');
const fs = require("fs");


const url = 'https://jsonplaceholder.typicode.com/posts';
https.get(url, res => {
  res.setEncoding('utf-8');
  let body = '';

  res.on('data', data => {
    body += data;
  })

  res.on('end', () => {
    // fs.writeFile('data.json', body, 'utf-8', err => {
    //   if (err) return err;
    //
    //   console.log('just pulled all the posts and created file', body);
    // });

    body = JSON.parse(body);

    console.log(
      `
        ${body[0].title}
      `
    )
  })
})
