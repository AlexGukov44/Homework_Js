fetch('https://randomuser.me/api/?results=10')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let userBox = document.getElementById('user');
        userBox.innerHTML = `
        <img src="${(data.results[0].picture.large)}" alt="фото">
        <p>Имя: ${(data.results[0].name.first + " " + data.results[0].name.last)}</p>
        <p>Пол: ${(data.results[0].gender)}</p>
        <p>Город: ${(data.results[0].location.city)}</p>
        <a href="mailto:${data.results[0].email}">Email: ${(data.results[0].email)}</a>
        <p>Логин: ${(data.results[0].login.username)}</p>
        <p>Пароль: ${(data.results[0].login.password)}</p>
        `;
        if (data.results && data.results.length > 0) {
            resultsBox = document.createElement('div');
            resultsBox.classList.add('other-users'); // добавить классы после того как заработает
            resultsBox.innerHTML = `<h2>ещё люди:</h2>`
            userBox.appendChild(resultsBox);

            data.results.forEach((user, index) => {
                let otherBox = document.createElement('div');
                otherBox.classList.add('user-item'); // добавить классы после того как заработает
                otherBox.innerHTML = `
                <div>${(index + 1)} человек</div>
                <img src="${(user.picture.large)}" alt="фото">
                <p>Имя: ${(user.name.first +  " " + user.name.last)}</p>
                <p>Пол: ${(user.gender)}</p>
                <p>Город: ${(user.location.city)}</p>
                <a href="mailto:${data.results[0].email}">Email: ${(data.results[0].email)}></a>
                <p>Логин: ${(user.login.username)}</p>
                <p>Пароль: ${(user.login.password)}</p>
                `; 
                resultsBox.appendChild(otherBox);
            })
        }
    })
    .catch(function(error) {
        console.error('ошибка получения данных', error);
    });
