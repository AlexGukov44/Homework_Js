let usernameInput = document.getElementById('username');
let saveBtn = document.getElementById('saveBtn');
let showBtn = document.getElementById('showBtn');
let deleteBtn = document.getElementById('deleteBtn');
let counter = document.getElementById('counter');
let output = document.getElementById('output');

// функция для отображения имен 

function showName() {
    let dataName = localStorage.getItem('username');
    if (dataName) {
        output.textContent = `сохранённое имя: ${dataName}`;
        output.style.color = '';
    } else {
        output.textContent = 'имя не найдено';
        output.style.color = 'red';
    }
};

function counterValue () {
    let count = localStorage.getItem('username') ? 1 : 0;
    counter.textContent = `количество сохранённых имён на сайте: ${count}`;
}

saveBtn.addEventListener('click', () => {
    let username = usernameInput.value;
    if (username) {
        localStorage.setItem('username', username);
        usernameInput.value = '';
        output.textContent = `имя ${username} сохранено`;
        output.style.color = '';
        counterValue();
    } else {
        output.textContent = 'введие имя перед сохранением';
        output.style.color = 'red';
    }
});

showBtn.addEventListener('click', showName);

deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    output.textContent = 'имя удалено';
    output.style.color = 'brown';
    counterValue();
});

counterValue();