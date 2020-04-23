var a = {
    foo: 'bar'
  };
  
  var b = {
    foo: 'bar'
  };
  
  console.log(a === b);
  // Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.
  // do biến a và b lưu giá trị tham chiếu đến 2 object khác nhau nên kết quả so sánh là false
