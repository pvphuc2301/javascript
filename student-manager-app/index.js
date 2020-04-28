/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
const readlineSync = require('readline-sync');
const getSlug = require('speakingurl');

var contacts = [];

function enterPhone(){
    let oldPhone, phone;
    do {
        phone = readlineSync.question('Nhập số điện thoại: ');
        oldContact = contacts.find(contact => contact.phone == phone);
        if(phone == '') {
            console.log('Số điện thoại không được bỏ trống.');
        }else if(oldContact && oldContact.phone != phone) {
            console.log('Số điện thoại đã tồn tại! Hãy nhập sô khác.');
        }
    } while (oldContact && oldContact.phone != phone || phone == '')
    return phone;
}

function enterName(){
    let name;
    do {
        name = readlineSync.question('Nhập tên: ')
        
        if(name == '') {
            console.log('tên không được bỏ trống.');
        }
    } while (name == '')
    return name;
    
}

function showAddContact(){
    const name = enterName();
    const phone = enterPhone();

    const contact = {name: name, phone: phone}

    contacts.push(contact);
    console.log(contacts);
}

function showEditContact(){
    const key = readlineSync.question('Nhập giá trị (sđt): ');

    const check = contacts.find(contact => contact.phone == key);
    if(check){
        const name = enterName();
        const phone = enterPhone();
    
        contacts.filter(contact => contact.phone == key)
        .map(e => {
            e.name = name;
            e.phone = phone;
        });
    }
    console.log(contacts);
}

function showDeleteContact(){
    const key = readlineSync.question('Nhập giá trị (sđt): ');

   contacts = contacts.filter(contact => contact.phone != key);
   console.log(contacts);
}

function showFindContact(){
    const key = readlineSync.question('Nhập giá trị (tên hoặc sđt): ');
    let keySlug = getSlug(key, {separator: ' ', uric: true});

    const results = contacts.filter(contact => {
        let contactSlug = getSlug(contact.name, {separator: ' ', uric: true});
        return contactSlug.includes(keySlug) || contact.phone.includes(keySlug);
    });

    console.log(results);
}

function showMenu(){

    console.log('--------------------------');
    console.log('1. Nhập dữ liệu contact.');
    console.log('2. Sửa dữ liệu contact.');
    console.log('3. Xoá contact.');
    console.log('4. Tìm kiếm contact.');
    console.log('5. Thoát.');
    console.log('--------------------------');

    const option = readlineSync.question("Nhập lựa chọn: ");

    switch(option){
        case '1':
            showAddContact();
            showMenu();
            break;
        case '2':
            showEditContact();
            showMenu();
            break;
        case '3':
            showDeleteContact();
            showMenu();
            break;
        case '4':
            showFindContact();
            showMenu();
            break;
        case '5':
            break;
        default:
            console.log('Hãy nhập lựa chọn từ 1 đến 5: ');
            showMenu();
            break;
    }
}



function main(){
    showMenu();
}


main();