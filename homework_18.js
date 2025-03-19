fetch('https://randomuser.me/api/?results=10')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let userBox = document.getElementById('user');
        userBox.innerHTML = `
        <img src="URL"${(data.picture.large)}>
        <p>${(data.name.first + data.name.last)}</p>
        <p>${(data.gender)}</p>
        <p>${(data.location.city)}</p>
        <a href="mailto:EMAIL">${(data.email)}</a>
        <p>${(data.login.username)}</p>
        <p>${(data.login.password)}</p>
        `;
        if (data.results && data.results.length > 0) {
            resultsBox = document.createElement('div');
            resultsBox.classList.add(''); // добавить классы после того как заработает
            resultsBox.innerHTML = `<h2>ещё людей )))</h2>`
            userBox.appendChild(resultsBox);

            data.results.forEach(function(otherUser, index) {
                let otherBox = document.createElement('div');
                otherBox.classList.add(''); // добавить классы после того как заработает
                otherBox.innerHTML = `
                // не понимаю что выводить тут ?
                `;
                resultsBox.appendChild(otherBox);
            })
        }
    })
    .catch(function(error) {
        console.error('ошибка получения данных', error);
    });
