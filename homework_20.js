//setTimeout
let box1 = document.querySelector('._1');

let button1 = document.getElementById('button1');

button1.addEventListener('click', () => {
    let position = 0;

    function animate() {
        position += 2;
        box1.style.transform = `rotate(${position}deg)`;

        if (position < 360) {
            setTimeout(animate, 20);
        }
    }
    animate();
});

//  setInterval()

let box2 = document.querySelector('._2');

let button2 = document.getElementById('button2');

button2.addEventListener('click', () => {
    let position = 0;

    const interval = setInterval(() => {
        position += 2;
        box2.style.transform = `rotate(${position}deg)`;

        if (position >= 360) {
            clearInterval(interval);
        }
    }, 20);
});

//  requestAnimationFrame()

let box3 = document.querySelector('._3');

let button3 = document.getElementById('button3');

button3.addEventListener('click', () => {
    let position = 0;
    
    function animate() {
        position +=2;
        box3.style.transform = `rotate(${position}deg)`;
        if (position < 360) {
            requestAnimationFrame(animate);
        }
    }
    animate();
});