// инициализация сцены 

const scene = new THREE.Scene();

//  камера 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 10, 50);

//  рендер

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;    // поддержка теней 

// состав кпугов по составу 
// материал

const materials = [
    new THREE.MeshBasicMaterial({ 
        color: 0x0000FF 
    }),
    new THREE.MeshLambertMaterial({ 
        color: 0x0000FF 
    }),
    new THREE.MeshPhongMaterial({ 
        color: 0x0000FF 
    }),
    new THREE.MeshPhongMaterial({ 
        color: 0x0000FF, shininess: 0 
    }),
    new THREE.MeshPhongMaterial({ 
        color: 0x0000FF, shininess: 30
     }),
    new THREE.MeshPhongMaterial({ 
        color: 0x0000FF, shininess: 150 
    }),
    new THREE.MeshStandardMaterial({ 
        color: 0x0000FF, roughness: 0, metalness: 0 
    }),
    new THREE.MeshStandardMaterial({ 
        color: 0x0000FF, roughness: 0.5, metalness: 0.5 
    }),
    new THREE.MeshStandardMaterial({ 
        color: 0x0000FF, roughness: 1, metalness: 1 
    }),
];

// форма ( круг )   и позиция в прастранстве 

const geometry = new THREE.CircleGeometry(5, 32);
const positions = [
    [-15, 15], [-5, 15], [5, 15],
    [-15, 5], [-5, 5], [5, 5],
    [-15, -5], [-5, -5], [5, -5]
];

// цикл для подбррки материала под позицию

materials.forEach((material, index) => {
    const circle = new THREE.Mesh(geometry, material);
    circle.position.set(positions[index][0], positions[index][1], 0);
    circle.castShadow = true;
    scene.add(circle);
});

// свет напрвленый 

const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 5, 10, 5 );     // настройка напрвления света по координатам 
light.castShadow = true;            // поддержка теней 

light.shadow.mapSize.width = window.innerWidth;  // размер карты под свет ( вся ширина окна )
light.shadow.mapSize.height = window.innerHeight; 
scene.add(light);           //  добавление в сцену 

// свет атмосферный 

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);


function animate() {
    requestAnimationFrame(animate);
    camera.lookAt(0, 0, 0); // ставим камеру 
    renderer.render(scene, camera);
};

animate();
