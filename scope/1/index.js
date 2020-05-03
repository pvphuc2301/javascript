var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo();
console.log(a); // Kết quả?
bar();
console.log(a); // Kết quả?
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh
// kết quả dòng 16 là 2 do biến a nằm trong hàm bar() là biến global nên khi gọi hàm bar() biến a nằm ở global bị thay đổi thành 2, kết quả dòng 14 là 1 do biến a ở hàm foo() là biến local nên khi gọi hàm foo() không làm thay đổi biến a nằm ở global