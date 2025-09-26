document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("countForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = document.getElementById("inputString").value;
    let count = 0;

    for (let char of input) {
      if (char.toLowerCase() === 'a') {
        count++;
      }
    }

    resultDiv.textContent = `Số ký tự "a" xuất hiện là: ${count}`;
  });
});
