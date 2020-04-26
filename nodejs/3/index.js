/**
 * 1. Thêm method `sum` cho module `math`, nhận vào 1 array các số, trả về tổng các số
 * 2. Require module math và sử dụng method sum để tính tổng 1 array các số bất kì
 * 3. Log kết quả
 */

 const math = require('./math');
 const result = math.sum([1, 2, 3, 4]);
 console.log(result);