document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const soThuNhat = document.getElementById("so1").value.trim();
        const soThuHai = document.getElementById("so2").value.trim();

        const tong = Number(soThuNhat) + Number(soThuHai);

        resultDiv.textContent = `✅ Tổng hai số là: ${tong}`;
    });
});