//
/*
document là nguyên toàn bộ trang web của mình. Nó là một phần tử chứa toàn bộ trang web của mình
	document.addEventListener: toàn bộ trang web của mình được thêm 1 lắng nghe sự kiện
	Và cụ thể sự kiện ở đây là: DOMContentLoaded -> khi trang web được load lên.
	Vậy nguyên đoạn code document.addEventListener("DOMContentLoaded", function(){}) nghĩa là khi trang web được load lên thì sẽ chạy những đoạn code trong function
	let form = document.getElementById("infoForm");
	Tạo một biến form. Lấy thẻ form có id là "infoForm" gán vào biến form
	let resultDiv = document.getElementById("result");
	Tạo một biến resultDiv. Lấy thẻ có id là "result" gán vào biến resultDiv
	if (form && resultDiv) { -> nếu form và resultDiv có giá trị -> điều kiện này bảo vệ trang web khỏi bị lỗi
		form.addEventListener("submit", functành vi mặc định của form là load lại ion (e) {}) -> form lắng nghe một sự kiện là submit (khi bấm nút Hiển thị)
		e.preventDefault(); -> chặn trang.
		e là viết tắt của event
		let name = document.getElementById("yourName").value.trim(); -> tạo biến name, lấy giá trị trong ô input có id là yourName, dùng hàm trim() để loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
		let age = document.getElementById("yourAge").value.trim();

		resultDiv.textContent = `Xin chào ${name}! Bạn ${age} tuổi.`; -> thay thế nội dung của phần resultDiv bằng nội dung mới
	}
*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("infoform");
    const resultDiv = document.getElementById("result")
    if (form && resultDiv) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const soA = document.getElementById("hangA").value.trim();
            const soB = document.getElementById("hangB").value.trim();

            const tong = Number(soA) + Number(soB);

            resultDiv.textContent = `✅ Tổng hai số là: ${tong}! `;
        })
    }
})