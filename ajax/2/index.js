const axios = require('axios');

//get data
// axios.get('http://localhost:3000/users')
// .then(function(response) {
//     console.log(response.data);
// })
// .catch(function(error) {
//     console.log(error);
// })

//post data
// axios.post('http://localhost:3000/users', {
//     id: 2,
//     title: 'json-server',
//     author: 'phanphuc'
// })
// .then(function(response) {
//     console.log(response);
// })
// .catch(function(error) {
//     console.log(error);
// })

//put data or patch data
axios.patch('http://localhost:3000/users/1', {
    title: 'json-server (update)',
    author: 'pvphuc2301'
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error);
});

//delete data
// axios.delete('http://localhost:3000/users/2')
// .then(function(response) {
//     console.log(response.data);
// })
// .catch(function(error) {
//     console.log(error);
// })