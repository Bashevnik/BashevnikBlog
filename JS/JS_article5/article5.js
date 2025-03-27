// Показ кнопки "Back to Top" при прокрутке
window.onscroll = function () {
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Тест на знание HTML
document.getElementById('html-test-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const resultDiv = document.getElementById('test-result');

    if (!q1 || !q2 || !q3) {
        resultDiv.textContent = 'Please answer all questions.';
        resultDiv.className = 'test-result warning';
        return;
    }

    let score = 0;
    if (q1.value === 'header') score++;
    if (q2.value === 'yes') score++;
    if (q3.value === 'accessibility') score++;

    if (score === 3) {
        resultDiv.textContent = 'Excellent! You’ve mastered these HTML basics.';
        resultDiv.className = 'test-result success';
    } else if (score >= 1) {
        resultDiv.textContent = 'Good effort! Review the tips where you answered incorrectly.';
        resultDiv.className = 'test-result warning';
    } else {
        resultDiv.textContent = 'Don’t worry! Go back and review the tips to improve your HTML skills.';
        resultDiv.className = 'test-result warning';
    }
});