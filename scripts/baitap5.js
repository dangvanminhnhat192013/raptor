document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const resultDiv = document.getElementById("result");

    // Tạo số bí mật ngẫu nhiên từ 1 đến 100
    let soBiMat = Math.round(Math.random() * 99) + 1;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const soNguoiDungDoan =(document.getElementById("secret").value.trim());

        if (soNguoiDungDoan) {
            if (soNguoiDungDoan === soBiMat) {
                resultDiv.textContent = " Chúc mừng bạn đã đoán đúng!";
            } else if (soNguoiDungDoan > soBiMat) {
                resultDiv.textContent = " Số bạn đoán lớn hơn số bí mật";
            } else {
                resultDiv.textContent = " Số bạn đoán nhỏ hơn số bí mật";
            }
        } else {
            resultDiv.textContent = " Vui lòng nhập một số hợp lệ từ 1 đến 100";
        }
    });
});