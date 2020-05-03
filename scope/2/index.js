var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();

// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
// dòng 10 đang gọi foo method của object b, do this nằm trong method của object b sẽ gọi đến thuộc tính a của object b, do vậy kết quả là 2
// dòng 13 đang gọi đến function vì vậy this nằm trong function sẽ gọi đến biến nằm ở global object