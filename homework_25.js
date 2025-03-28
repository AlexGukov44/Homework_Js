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
            y -= 10;
            break;
        case 'ArrowDown':
            y += 10;
            break;
        case 'ArrowLeft':
            x -= 10;
            break;
        case 'ArrowRight':
            x += 10;
            break;
        case 'l':
            rotation += 180;
            break;
        case 'k':
            scale += 10;
            updateObjectStyle();
            setTimeout(() => {
                scale = 100;
            }, 2000);
            break;
    }
    x = Math.max(0, Math.min(x, window.innerWidth - objectWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - objectHeight));

    object.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale/100})`;

    let count = document.getElementById('count');
    count.innerHTML = `
    <div>x = ${x}</div>
    <div>y = ${y}</div>
    `;
});

// object.addEventListener('mousedown', () => {
//     object.style.opacity = 0;

//     setTimeout(() => {
//         object.style.opacity = 1;
//     }, 2000);
// });

object.addEventListener('mousedown', () => {
    object.classList.add('grabbed');
});
object.addEventListener('mouseup', () => {
    object.classList.remove('grabbed');
});

