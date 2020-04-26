/**
 *  1. Tạo module `circle.js` export 1 constructor function tên là Circle
 *  2. Circle có 3 property là x, y, radius (toạ độ x, y và bán kính)
 *  3. Circle có 1 method là isOverlapped (overlap là chồng lấn, đè lên nhau), trả về -1 nếu 2 hình tròn này đè lên nhau, trả về 1 nếu 2 hình tròn không đụng nhau, trả về 0 nếu 2 hình tròn tiếp xúc nhau.
 *  4. Test thử
 */

 function Circle(x, y, radius){
     this.x = x;
     this.y = y;
     this.radius = radius;
 }

 Circle.prototype.isOverlapped = function(circle){
    const distance = Math.sqrt(Math.pow(circle.x - this.x, 2) + Math.pow(circle.y - this.y, 2));
    const radiusSum = this.radius + circle.radius;
    if(distance > radiusSum){
        return 1;
    }else if(distance < radiusSum){
        return -1;
    }else{
        return 0;
    }
 }

 module.exports = Circle;