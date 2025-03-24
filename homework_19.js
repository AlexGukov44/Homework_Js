    fetch('https://dummyjson.com/posts')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let postBox = document.getElementById('posts');

        if (data.posts) { 
            let postsContainer = document.createElement('div');
            postsContainer.classList.add('posts'); 
            postBox.appendChild(postsContainer);

            data.posts.forEach(function(postItem, index) {
                let itemBox = document.createElement('div');
                itemBox.classList.add('posts-item'); 
                itemBox.innerHTML = `
                    <h2>${postItem.title}</h2>
                    <p>${postItem.body}</p>
                    <p class="tags"> ${postItem.tags.join(', ')}</p>
                    <img src="img/like.svg" class="posts-icon" alt="Лайк">
                    <p>${postItem.reactions.likes}</p>
                    <img src="img/dislike.svg" class="posts-icon" alt="Лайк">
                    <p>${postItem.reactions.dislikes}</p>
                    <img src="img/view.svg"${postItem.views} class="posts-icon" alt="Просмотр">
                    <p>${postItem.views}</p>
                `;
                postsContainer.appendChild(itemBox);
            });
        } else {
            postBox.innerHTML = "<p>Сообщений не найдено.</p>";
        }
    })
    .catch(function(error) {
        console.error('Ошибка получения данных:', error);
    });
