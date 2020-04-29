/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

 const axios = require('axios');

 async function getData() {
    try {
      await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => console.log(response.data));

      await axios.get('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => console.log(response.data));
      
    } catch (error) {
      console.error(error);
    }
  }

  getData();


