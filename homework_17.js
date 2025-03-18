
fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
    .then(response => response.json())
    .then(data => {
        let currencyConverter = document.getElementById('currency-converter');
        currencyConverter.innerHTML = `
        <p>1 евро = ${data.rates.USD} долларов</p>
        <P>1 евро = ${data.rates.RUB} рублей</P>
        <p>1 евро = ${data.rates.AED} дирхам</p>
        <p>1 евро = ${data.rates.THB} тайских бат</p>
        `;
    })
    .catch(error => {
        console.error('ошибка получения данных', error);
    });
