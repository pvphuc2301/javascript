/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
//methods trong arrays
//Tạo mảng
let numbers = [1, 2, 3, 4, 5, 6, 7];
//truy xuất phần tử trong mảng
console.log(numbers[1]);
// 2

//lặp qua một mảng
numbers.forEach(item => {
    console.log(item);
});
// 1 
// 2 
// 3
// 4 
// 5 
// 6
// 7

//Thêm giá trị vào vị trí cuối mảng
numbers.push(8);
// [1, 2, 3, 4, 5, 6, 7, 8]

//loại bỏ giá trị vị trí cuối mảng
numbers.pop();
// [1, 2, 3, 4, 5, 6, 7]

//loại bỏ giá trị vị trí đầu mảng
numbers.shift();
// [2, 3, 4, 5, 6, 7]


//thêm giá trị vào vị trí đầu mảng
numbers.unshift(1);
// [1, 2, 3, 4, 5, 6, 7]

//tìm chỉ số của phần tử trong một mảng
numbers.indexOf(3);
// 2

//loại bỏ phần tử trong mảng dựa vào chỉ số
//loại bỏ phần tử ở chỉ số  1
numbers.splice(1, 1);
// [1, 3, 4, 5, 6, 7]

//loại bỏ nhiều phần tử từ chỉ số
//loại bỏ 2 phần tử từ chỉ số 2
numbers.splice(2, 2);
// [1, 3, 6, 7]

// sử dụng slice method để copy an Array
// numbers.slice()
// [1, 3, 6, 7]

