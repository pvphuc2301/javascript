/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
let i = 0;
let result;

while(i <= 1000) {
    if(i % 3 == 0 && i % 5 == 0) {
        result = i;
    }
    i++;
}