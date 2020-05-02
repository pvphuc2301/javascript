const axios = require('axios');

// Giải thích điểm khác nhau giữa 1 và 2:
// 1.
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2.
async function fetchUrlsParallel(urls) {
  const results = await Promise.all(
    urls.map(function(url) {
      return axios.get(url);
    })
  );
  return results;
}

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
];

fetchUrls(urls).then(() => console.log('Done'));
fetchUrlsParallel(urls).then(() => console.log('Done 2'));

//Trả lời:
//đối với hàm fetchUrls(), mỗi lần load dữ liệu cần phải đợi phần tử trước load xong mới load tiếp dữ liệu tiếp theo, trả về kết quả khi phần tử cuối mảng load xong dữ liệu.
//đối với hàm fetchUrlsParallel(), cùng một lúc có thể load nhiều dữ liệu, hàm trả về kết quả khi dữ liệu có thời gian load lâu nhất hoàn thành
//-> tốc độ hàm fetchUrlsParallel() sẽ nhanh hơn vì cùng một lúc có thể load được nhiều dữ liệu
