const axios = require('axios');

let username = 'edwin';

axios.get('https://api.github.com/users/' + username).then((res) => {

  console.log(res.data.company);

}).catch((err) => {
  console.log(err);
})
