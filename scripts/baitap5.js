document.addEventListener("DOMContentLoaded", function () {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  const form = document.getElementById("guessForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const guess = Number(document.getElementById("userGuess").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      resultDiv.textContent = "Vui lòng nhập số từ 1 đến 100.";
      return;
    }

    if (guess === secretNumber) {
      resultDiv.textContent = "🎉 Chúc mừng bạn đã đoán đúng!";
    } else if (guess > secretNumber) {
      resultDiv.textContent = "🔼 Số bạn đoán lớn hơn số bí mật.";
    } else {
      resultDiv.textContent = "🔽 Số bạn đoán nhỏ hơn số bí mật.";
    }
  });
});
