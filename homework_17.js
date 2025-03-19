
// fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
//     .then(response => response.json())
//     .then(data => {
//         let currencyConverter = document.getElementById('currency-converter');
//         currencyConverter.innerHTML = `
//         <p>1 евро = ${data.rates.USD} долларов</p>
//         <P>1 евро = ${data.rates.RUB} рублей</P>
//         <p>1 евро = ${data.rates.AED} дирхам</p>
//         <p>1 евро = ${data.rates.THB} тайских бат</p>
//         `;
//     })
//     .catch(error => {
//         console.error('ошибка получения данных', error);
//     });



    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ошибка! статус: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let currencyConverter = document.getElementById('currency-converter');
        let output = "";

        // Проверка существования курсов перед обращением к ним
        if (data && data.rates) {
            const rates = data.rates;
            output += rates.usd ? `<p>1 евро = ${rates.usd} долларов</p>` : `<p>Курс USD не найден</p>`;
            output += rates.rub ? `<p>1 евро = ${rates.rub} рублей</p>` : `<p>Курс RUB не найден</p>`;
            output += rates.aed ? `<p>1 евро = ${rates.aed} дирхам</p>` : `<p>Курс AED не найден</p>`;
            output += rates.thb ? `<p>1 евро = ${rates.thb} тайских бат</p>` : `<p>Курс THB не найден</p>`;
        } else {
            output = "<p>Ошибка: Неверные данные получены от API.</p>";
        }
        currencyConverter.innerHTML = output;
    })
    .catch(error => {
        console.error('Ошибка получения данных:', error);
        // Дополнительно выводим понятное пользователю сообщение об ошибке на странице
        const currencyConverter = document.getElementById('currency-converter');
        currencyConverter.innerHTML = `<p>Ошибка загрузки данных о курсах валют: ${error.message}</p>`;
    });
