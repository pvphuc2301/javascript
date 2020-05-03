/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var books = [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
    {id: 3, name: 'C'}
];

var users = [{id: 1, name: 'John'}, {id: 2, name: 'Mosh'}];

var histories = [
    {userId: 1, bookId: 1, dateBorrowed: '2019/10/17', duedate: '2019/10/21', dateReturned: '2019/10/25'},
    {userId: 1, bookId: 2, dateBorrowed: '2019/10/17', duedate: '2019/10/21', dateReturned: '2019/10/23'},
    {userId: 1, bookId: 3, dateBorrowed: '2019/10/17', duedate: '2019/10/21', dateReturned: null},
]

var totalExtraDateOfUser = [
    {userId: 1, total: 6}
]

function addUser(user){
    if(users.find(u => u.id === user.id))
    {
        console.log('id exist');
    }else{
        users.push(user);
    }
}

function addHistory(history){
    histories.push(history);
}

function getTotalExtraDateOfUser(userId){
    var result = histories.filter(history => {
        if(history.userId === userId){
            let duedate = new Date(history.duedate);
            let dateReturned = new Date(history.dateReturned);
            return dateReturned > duedate;
        }
    }).reduce((previousValue, currentValue) => {
        let duedate = new Date(currentValue.duedate);
        let dateReturned = new Date(currentValue.dateReturned);

        let extraDate = (dateReturned.getTime() - duedate.getTime()) / ((1000 * 3600 * 24));
        
        return previousValue + extraDate;
    }, 0);
    return result;
}

addUser({id: 3, name: 'Bianca'});
console.log(users);

addHistory({userId: 2, bookId: 1, dateBorrowed: '2019/05/03', duedate: '2019/05/20', dateReturned: null})
console.log(histories);

console.log(getTotalExtraDateOfUser(1));