// запуск сцены 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('game').appendChild( renderer.domElement );

// освещение 

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);


// отрисовка куба 

const playerGeometry = new THREE.BoxGeometry(1, 1, 1);       // (ширина, высота, глубина)
const playerMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // задаем цвет
const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.y = -3;
scene.add(player);

// Отрисовка сферы с другим цветом и размером
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16); 
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 }); // Красный цвет
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.y = 2; // Подняли сферу
scene.add(sphere);


// Отрисовка пирамиды
const pyramidGeometry = new THREE.CylinderGeometry(0, 0.5, 1, 4); // Основание 0.5, высота 1, 4 стороны
const pyramidMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff }); // Синий цвет
const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
//pyramid.position.y = -1; // Позиция пирамиды
scene.add(pyramid);


// Переменная для угла вращения сферы

let angle = 0;
let pyramidAngle = 0;

// Анимация

function animate() {
    requestAnimationFrame(animate);
    
    // Вращение куба

    player.rotation.x += 0.01;
    player.rotation.y += 0.01;

    // Обновление позиции сферы для вращения вокруг куба

    angle += 0.01;
    sphere.position.x = Math.cos(angle) * 3;
    sphere.position.z = Math.sin(angle) * 3;
    sphere.position.y = 2;

    // Вращение пирамиды вокруг сферы

    pyramidAngle += 0.02; // Увеличиваем угол вращения
    pyramid.position.x = Math.cos(pyramidAngle) * 3; // Позиция по оси X
    pyramid.position.z = Math.sin(pyramidAngle) * 3; // Позиция по оси Z
    pyramid.position.y = -1; // Высота пирамиды

    renderer.render(scene, camera);
};

animate();
