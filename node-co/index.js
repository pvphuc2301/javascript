var co = require('co');
var axios = require('axios');
/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
  
  // Cách 1: Sử dụng vòng lặp for
  
  // Cách 2: Sử dụng array.map
  // Gợi ý: Có thể yield 1 array các Promise

co(function* (){
    var result = yield urls.map(function(url) {
        return axios(url);
    })
    return result;
}).then(function(values) {
    console.log(values);
}).catch(function(err) {
    console.log(err);
})