const axios = require('axios')

axios.all([
  axios.get('https://jsonplaceholder.typicode.com/posts'), 
  axios.get('https://jsonplaceholder.typicode.com/users')
])
.then(axios.spread((obj1, obj2) => {
  var expected = obj1.data.map(a => Object.assign(a, obj2.data.find(b => b.id == a.userId)));
  console.log(expected);
}));