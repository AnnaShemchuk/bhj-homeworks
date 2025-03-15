document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signin__form');
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    const savedUserId = localStorage.getItem('user_id');
    if (savedUserId) {
        showWelcomeBlock(savedUserId);
    } else {
        showSigninBlock();
    }

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(signinForm);
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('user_id', data.user_id);
                    showWelcomeBlock(data.user_id);
                } else {
                    alert('Неверный логин/пароль');
                }
            })
            .catch(error => {
                console.error('Ошибка при отправке запроса:', error);
            });
    });

    function showSigninBlock() {
        signinBlock.classList.add('signin_active');
        welcomeBlock.classList.remove('welcome_active');
    }

    function showWelcomeBlock(userId) {
        userIdSpan.textContent = userId;
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
    }
});