/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

 //for ...in -> lặp các cặp key-value trong một object, 

 let person = {
     name: '',
     age: 10
 };

 for(let key in person){
    console.log(key + person[key]);
 }

// lặp các giá trị trong array
let numbers = [1, 2, 3];
for(let key in numbers){
    console.log(key + numbers[key]);
}

//for..of -> chỉ dùng với dữ liệu có thể lặp được (string, array, maps, ...)

for(let value of numbers){
    console.log(value);
}
// không thể dùng với dữ liệu không thể lặp được (object)
// for(let value of person){
//     console.log(value);
// }
// -> error