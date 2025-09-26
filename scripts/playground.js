document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("sumForm");
  let resultDiv = document.getElementById("result");

  if (form && resultDiv) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let so1 = document.getElementById("number1").value.trim();
      let so2 = document.getElementById("number2").value.trim();

      if (so1 !== "" && so2 !== "") {
        let num1 = Number(so1);
        let num2 = Number(so2);

        if (!isNaN(num1) && !isNaN(num2)) {
          let sum = num1 + num2;
          resultDiv.textContent = `Tổng hai số là: ${sum}`;
        } else {
          resultDiv.textContent = "Vui lòng nhập hai số hợp lệ!";
        }
      } else {
        resultDiv.textContent = "Vui lòng nhập đầy đủ hai số!";
      }
    });
  }
});
