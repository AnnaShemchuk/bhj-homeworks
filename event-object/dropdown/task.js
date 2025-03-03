document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    Array.from(dropdowns).forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');

        value.addEventListener('click', function (e) {
            e.preventDefault();
            list.classList.toggle('dropdown__list_active');
        });

        list.addEventListener('click', function (e) {
            const target = e.target.closest('.dropdown__link');
            if (target) {
                value.textContent = target.textContent;
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});