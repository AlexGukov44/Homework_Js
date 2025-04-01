const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let timeLeft = 30; // время в секундах
let timerInterval;
let gameRunning = false; // Флаг, отслеживающий, запущена ли игра

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver('Время вышло!');
        }
    }, 1000);
}

function gameOver(message) {
    clearInterval(timerInterval);
    gameRunning = false; // Остановить игровой цикл
    ctx.fillStyle = '#fff';
    ctx.font = '40px Tahoma';
    const textMetrics = ctx.measureText(message);
    const x = (canvas.width - textMetrics.width) / 2;
    const y = canvas.height / 2 + 15;
    ctx.fillText(message, x, y);
}



function resizeCanvas() {          //  получаем ширину экрана при загрузке и фиксируем изменения ( если они есть )
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    resetPlayerAndDots();
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    dots.forEach(dot => {
        dot.x = Math.random() * canvas.width;
        dot.y = Math.random() * canvas.height;
    });
  }
  window.addEventListener('load', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);



const player = {
    x: 0,
    y: 0,
    radius: 20,
    speed: 3,
    color: '#dfc252',
    dx: 0,
    dy: 0,
};


function drawPlayer(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

const dots = [];
let dotCount = 20;
let dotRadius = 10;
let dotColor = 'red';    //   #10375c

function drawDots() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        drawPlayer(dot.x, dot.y, dot.radius, dot.color);
    }
}

function createDots() {
    for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dots.push({
            x,
            y,
            radius: dotRadius,
            color: dotColor,
        });
    }
}
createDots();

function resetPlayerAndDots() {
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    createDots();
}

function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;

    if (player.x - player.radius < 0)
        player.x = player.radius;

    if (player.x + player.radius > canvas.width)
        player.x = canvas.width - player.radius;

    if (player.y - player.radius < 0)
        player.y = player.radius;

    if (player.y + player.radius > canvas.height)
        player.y = canvas.height - player.radius;
}

function checkCollision() {
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const distance = Math.sqrt(Math.pow(player.x - dot.x, 2) + Math.pow(player.y - dot.y, 2));

        if (distance < player.radius + dot.radius) {
            dots.splice(i, 1);
            break;
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer(player.x, player.y, player.radius, player.color);
    drawDots();
    updatePlayer();
    checkCollision();

    if (dots.length === 0) {
        ctx.fillStyle = '#fff';
        ctx.font = '40px Tahoma';
        const text = 'Поздравляем!';
        const textMetrics = ctx.measureText(text);
        const x = (canvas.width - textMetrics.width) / 2;
        const y = canvas.height / 2 + 15; // +15 для вертикального центрирования (коррекция для шрифта)

        ctx.fillText(text, x, y);

        clearInterval(timerInterval); // остановить таймер при победе
        gameOver('время вышло!');
        return;

    }
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Время: ${timeLeft}`, 10, 30);

    requestAnimationFrame(gameLoop);
}

function startGame() {
    gameRunning = true; // Установка флага запуска игры
    resetPlayerAndDots();
    timeLeft = 30;
    startTimer();
    gameLoop();
}

  
  

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        // case 'ArrowUp':
        //     player.dy = -player.speed;
        //     break;
        // case 'ArrowDown':
        //     player.dy = player.speed;
        //     break;
        // case 'ArrowLeft':
        //     player.dx = -player.speed;
        //     break;
        // case 'ArrowRight':
        //     player.dx = player.speed;
        //     break;
        case 'w':
            player.dy = -player.speed;
            break;
        case 's':
            player.dy = player.speed;
            break;
        case 'a':
            player.dx = -player.speed;
            break;
        case 'd':
            player.dx = player.speed;
            break;

    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        // case 'ArrowUp':
        // case 'ArrowDown':
        //     player.dy = 0;
        //     break;
        // case 'ArrowLeft':
        // case 'ArrowRight':
        //     player.dx = 0;
        //     break;
        case 'w':
        case 's':
            player.dy = 0;
            break;
        case 'a':
        case 'd':
            player.dx = 0;
            break;

    }
});

//document.getElementById('startGame').addEventListener('click', startGame);

gameLoop();
startGame();
startTimer();