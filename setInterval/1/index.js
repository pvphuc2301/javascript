/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
    var countDownId = setInterval(()=>{
        if(x < 0) {
            console.log('Happy new year');
            clearInterval(countDownId);
        }else{
            console.log(x);
            x--;
        }
    }, 1000);
}

countDown(5);