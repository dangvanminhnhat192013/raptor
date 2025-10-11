 // Hàm xử lý khi người dùng bấm nút
        function findMax() {
            // Lấy chuỗi người dùng nhập
            const input = document.getElementById('numberArray').value;

            // Tách chuỗi thành mảng, loại bỏ khoảng trắng, và chuyển thành số
            const arr = input.split(',').map(item => Number(item.trim()));

            // Kiểm tra nếu có phần tử không phải là số
            if (arr.length === 0 || arr.some(isNaN)) {
                document.getElementById('result').innerText = "Vui lòng nhập các số hợp lệ, cách nhau bằng dấu phẩy.";
                return;
            }

            // Tìm số lớn nhất trong mảng
            const max = Math.max(...arr);

            // Hiển thị kết quả
            document.getElementById('result').innerText = "Số lớn nhất trong mảng là: " + max;
        }