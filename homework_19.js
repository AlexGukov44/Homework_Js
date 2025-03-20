fetch('https://dummyjson.com/posts')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let postBox = document.getElementById('posts');
        postBox.innerHTML = `
        <h1>${(data.title)}</h1>
        <p>${(data.body)}</p>
        <p>${(data.tags)}</p>
        <img>${(data.reactions)}</img>
        <img>${(data.views)}</img>
        `;
        if (data.posts && data.posts.lenght > 0) {
            let postsContainer = document.createElement('div');
            postsContainer.classList.add('');       // добавить класс позже 
            postBox.appendChild(postsContainer);

            data.postBox.forEach(function(postItem, index) {
                let itemBox = document.createElement('div');
                itemBox.classList.add('');          //  добавить позже 
                itemBox.innerHTML = `
                <h1>${(postItem.title)}</h1>
                <p>${(postItem.body)}</p>
                <p>${(postItem.tags)}</p>
                <img>${(postItem.reactions)}</img>
                <img>${(postItem.views)}</img>
                `;
                postsContainer.appendChild(itemBox);
            })
        }
    })
    .catch(function(error) {
        console.error('ошибка получения данных', error);
    });
    