/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 */
/**
 * SpeakingURL
 * Ví dụ: Chuyển đường dẫn url bên dưới thành đường dẫn url thân thiện (url thân thiện giúp người dùng và các công cụ tìm kiếm dễ nhận biết, giúp ít cho SEO))
 *  'How to create a clean & nice-looking URL?' -> 'how-to-create-a-clean-and-nice-looking-url'
 */

var getSlug = require('speakingurl');

const badURL = 'How to create a clean & nice-looking URL?';

const slugURL = getSlug(badURL);

console.log(slugURL); // Output: how-to-create-a-clean-and-nice-looking-url

/**
 * getSlug() nhận vào 2 tham số, tham số 1 cần truyền vào chuỗi string, tham số 2 (không bắt buộc) mặc định là ký tự '-', ký tự '-' sẽ thay thế khoảng trắng trong chuỗi string
 * mặc định:
 * tất cả ký tự sẽ chuyển thành chữ thường: set maintainCase là true để giữ nguyên ký tự viết hoa
 * khoảng trắng được thay thế bằng ký tự '-', truyền vào ký tự khác nếu muốn thay đổi
 * ký tự '&' sẽ chuyển thành 'and', ký tự '?' bị loại bỏ, set lại custom để thay đổi
 */


