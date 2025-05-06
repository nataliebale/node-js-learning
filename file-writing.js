const fs = require('fs');

fs.writeFile('./modules/data.html', `Hello this file has just been created \n`, 'UTF8', (err) => {
  if(err) return err;

  console.log('file has been saved');
})

fs.appendFile('./modules/data.html', `Extra data appended to this file \n`, 'UTF8', (err) => {
  if(err) return err;

  console.log('file has been updated');
})
