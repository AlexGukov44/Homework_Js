fetch('https://randomuser.me/api/?results=10')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let userBox = document.getElementById('user');
        userBox.innerHTML = `
        <img src="URL"${(data.results[0].picture.large)}>
        <p>${(data.results[0].name.first + " " + data.results[0].name.last)}</p>
        <p>${(data.results[0].gender)}</p>
        <p>${(data.results[0].location.city)}</p>
        <a href="mailto:(${(data.results[0].email)})"></a>
        <p>${(data.results[0].login.username)}</p>
        <p>${(data.results[0].login.password)}</p>
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
                <div>${(index + 1)} человек</div>
                <img src="URL"${(otherUser.results[index].picture.large)}>
                <p>${(otherUser.results[index].name.first +  " " + otherUser.name.last)}</p>
                <p>${(otherUser.results[index].gender)}</p>
                <p>${(otherUser.results[index].location.city)}</p>
                <a href="mailto:(${(otherUser.results[index].email)})"></a>
                <p>${(otherUser.results[index].login.username)}</p>
                <p>${(otherUser.results[index].login.password)}</p>
                `;
                resultsBox.appendChild(otherBox);
            })
        }
    })
    .catch(function(error) {
        console.error('ошибка получения данных', error);
    });
