var fs = require('fs');
var axios = require('axios');

// fs.readFile(
//   './data.json', 
//   { encoding: 'utf8'}, 
//   function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */

 async function readFiles() {
    var loadFromDisk = await new Promise(function (resolve, reject) {
        fs.readFile('./data.json', {encoding: 'utf8'}, function(err, data) {
            if(err) reject(err);
            else resolve(data);
        })
     });

    var loadFromUrl = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    return [loadFromDisk, loadFromUrl.data];
 }

 readFiles()
 .then(function (data) {
    console.log(data);
 });