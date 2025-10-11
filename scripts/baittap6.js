// baitap6.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("infoForm");
    const resultDiv = document.getElementById("result");

    if (form && resultDiv) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const inputStr = document.getElementById("inputString").value.trim();

            /*
            inputStr.split('a'): cách nhanh gọn để đếm số lần xuất hiện của ký tự 'a' trong chuỗi inputStr.

            Hàm .split('a') sẽ tách chuỗi inputStr thành mảng, nơi mỗi phần tử được phân tách bởi ký tự 'a'.

            Tức là: mỗi lần xuất hiện của chữ 'a' sẽ tạo ra một chỗ cắt trong mảng.

            → .length - 1

            Số phần tử trong mảng sẽ luôn nhiều hơn số ký tự 'a' đúng 1 đơn vị.

            Vì vậy, để đếm số lần ký tự 'a' xuất hiện, ta lấy length - 1.
            */

            const count = inputStr.split('a').length - 1;

            resultDiv.textContent = `Số lần xuất hiện của ký tự "a": ${count}`;
        });
    }
});