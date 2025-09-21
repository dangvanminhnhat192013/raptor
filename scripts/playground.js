document.addEventListener("DOMContentLoaded", function () {
	let form = document.getElementById("A");
	let resultDiv = document.getElementById("result");
	if (form && resultDiv) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			let sohangA = document.getElementById("hangA").value.trim();
			let sohangB = document.getElementById("hangB").value.trim();
			if (sohangA && sohangB) {
			let sohangA
			} else {
				resultDiv.textContent = "sohangA + sohangB";
			}
		});
	}
});


	