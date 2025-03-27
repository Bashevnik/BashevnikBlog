// Валидация формы
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Сброс ошибок
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
        group.querySelector('.error-message').textContent = '';
    });

    // Валидация имени
    const name = document.getElementById('name').value;
    if (name.length < 2) {
        isValid = false;
        document.getElementById('name-error').textContent = 'Name must be at least 2 characters long';
        document.getElementById('name').parentElement.classList.add('error');
    }

    // Валидация даты
    const date = new Date(document.getElementById('date').value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
        isValid = false;
        document.getElementById('date-error').textContent = 'Date cannot be in the past';
        document.getElementById('date').parentElement.classList.add('error');
    }

    // Валидация времени
    const time = document.getElementById('time').value;
    if (!time) {
        isValid = false;
        document.getElementById('time-error').textContent = 'Please select a time';
        document.getElementById('time').parentElement.classList.add('error');
    }

    // Валидация количества гостей
    const guests = parseInt(document.getElementById('guests').value);
    if (guests < 1 || guests > 20) {
        isValid = false;
        document.getElementById('guests-error').textContent = 'Number of guests must be between 1 and 20';
        document.getElementById('guests').parentElement.classList.add('error');
    }

    // Валидация email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        document.getElementById('email').parentElement.classList.add('error');
    }

    // Валидация номера телефона
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        document.getElementById('phone-error').textContent = 'Please enter a valid phone number (e.g., +1234567890)';
        document.getElementById('phone').parentElement.classList.add('error');
    }

    if (isValid) {
        this.submit();
    }
});

// Показ кнопки "Back to Top" при прокрутке
window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}