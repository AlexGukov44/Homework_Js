 /*
 fetch('https://dummyjson.com/posts')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let postBox = document.querySelector('.posts');

        if (data.posts) { 
            let postsContainer = document.createElement('div');
            postsContainer.classList.add('posts'); 
            postBox.appendChild(postsContainer);

            data.posts.forEach(function(postItem, index) {
                let itemBox = document.createElement('div', 'posts-item');
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
*/

fetch('https://dummyjson.com/posts')
   .then(function(response) {
      return response.json();
   })
   .then(function(data) {
        let posts = data.posts;
        console.log(posts);

        for (let i = 0; i <= posts.length - 1; i++) {
            createPost(posts[i]);
        }
   })
   .catch(function(error) {
        console.error('Ошибка при получении данных', error);
   });

// cоздание структуры поста

function createPost(dataPost) {
    const posts = document.querySelector('.posts');

    let post = createElem('div', 'posts-item');
    post.innerHTML = `
        <h2>${dataPost.title}</h2>
        <p>${dataPost.body}</p>
    `;
    let postFooter = createElem('div', 'posts-footer');
    let tagsOfPost = createElem('div', 'tags');
    let postInfo = createElem('div', 'posts-info');
    postInfo.innerHTML = `
        <p class="posts-icon like">${dataPost.reactions.likes || 0}</p>
        <p class="posts-icon dislike">${dataPost.reactions.dislikes || 0}</p>
        <p class="posts-icon view">${dataPost.views || 0}</p>
    `;

    postFooter.appendChild(tagsOfPost);
    postFooter.appendChild(postInfo);
    post.appendChild(postFooter);

    if(dataPost.tags.length !== 0) {
        for(let item = 0; item <= dataPost.tags.length - 1; item++) {
            let tag = createElem('div', 'tag');;
            tag.textContent = `${dataPost.tags[item]}`;
            tagsOfPost.appendChild(tag);
        }
    }
    posts.appendChild(post);
}

function createElem(tag, className) {
    let elem = document.createElement(tag);
    elem.className = className;
    return elem;
}