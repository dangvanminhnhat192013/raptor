document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("infoForm");
    const resultDiv = document.getElementById("result");
     
    if (form && resultDiv) {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          
          const inputStr = document.getElementById("inputString").value.trim();
          const count = inputStr.split('a').length - 1;
          resultDiv.textContent = `Số lần xuất hiện của ký tự "a": ${count}`;
        })
    }
})