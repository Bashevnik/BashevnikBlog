// Функция для переключения гамбургер-меню
function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("active");
  }
  
  // Показ кнопки "Back to Top" при прокрутке
  window.onscroll = function () {
    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
      backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    }
  };
  
  // Плавная прокрутка наверх
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Обработчик клика для кнопки "Click Me"
  document
    .getElementById("responsive-btn")
    .addEventListener("click", function () {
      const message = document.getElementById("click-message");
      message.style.display = "block";
    });
  
  // Логика для теста "Is Your Site Responsive?"
  document
    .getElementById("responsive-test-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');
      const q3 = document.querySelector('input[name="q3"]:checked');
      const resultDiv = document.getElementById("test-result");
  
      if (!q1 || !q2 || !q3) {
        resultDiv.textContent = "Please answer all questions.";
        resultDiv.className = "test-result warning";
        return;
      }
  
      let score = 0;
      if (q1.value === "yes") score++;
      if (q2.value === "yes") score++;
      if (q3.value === "yes") score++;
  
      if (score === 3) {
        resultDiv.textContent = "Great job! Your site is ready for 2025.";
        resultDiv.className = "test-result success";
      } else if (score >= 1) {
        resultDiv.textContent =
          "Not bad! Address the areas where you answered 'No' to improve.";
        resultDiv.className = "test-result warning";
      } else {
        resultDiv.textContent =
          "Your site needs work. Start implementing responsive design today!";
        resultDiv.className = "test-result warning";
      }
    });