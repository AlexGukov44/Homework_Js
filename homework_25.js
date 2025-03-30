const object = document.querySelector('.object');
let x = 0;
let y = 0;

let objectWidth = object.offsetWidth;
let objectHeight = object.offsetHeight;

let rotation = 0;
let scale = 100;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (y > 0) y -= 10;
            break;
        case 'ArrowDown':
            if (y < window.innerHeight - objectHeight) y += 10;
            break;
        case 'ArrowLeft':
            if (x >0) x -= 10;
            break;
        case 'ArrowRight':
            if (x < window.innerWidth - objectWidth) x += 10;
            break;
        case 'l':
            rotation += 180;
            break;
        case 'k':
            scale += 100;
            updateObjectStyle();
            setTimeout(() => {
                scale = 100;
                updateObjectStyle();
            }, 2000);
            break;
    }
    updateObjectStyle();
});

function updateObjectStyle() {
    object.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale/100})`;
    let count = document.getElementById('count');
    count.innerHTML = `
    <div>x = ${x}</div>
    <div>y = ${y}</div>
    `;
}

object.addEventListener('mousedown', () => {
    object.classList.add('grabbed');
});
object.addEventListener('mouseup', () => {
    object.classList.remove('grabbed');
});

