document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    loader.classList.add('loader_active');

    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => response.json())
        .then(data => {
            loader.classList.remove('loader_active');

            const valute = data.response.Valute;
            for (let key in valute) {
                const currency = valute[key];
                const item = document.createElement('div');
                item.classList.add('item');

                const itemCode = document.createElement('div');
                itemCode.classList.add('item__code');
                itemCode.textContent = currency.CharCode;

                const itemValue = document.createElement('div');
                itemValue.classList.add('item__value');
                itemValue.textContent = currency.Value;

                const itemCurrency = document.createElement('div');
                itemCurrency.classList.add('item__currency');
                itemCurrency.textContent = 'руб.';
                item.appendChild(itemCode);
                item.appendChild(itemValue);
                item.appendChild(itemCurrency);
                itemsContainer.appendChild(item);
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
            loader.classList.remove('loader_active');
        });
});