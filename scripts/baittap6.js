document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("infoform");
    let resultDiv = document.getElementById("result")
    if (form && resultDiv) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();
            const string = document.getElementById("chuoi").value.trim();
            resultDiv.textContent = "số lần xuất hiện của ký tự a" $(string);
            
        })
        }
        })