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

// круг № 1

const geometry_1 = new THREE.CircleGeometry( 5, 32 ); 
const material_1 = new THREE.MeshBasicMaterial( { 
    color: 0xffffff
 } ); 
const circle_1 = new THREE.Mesh( geometry_1, material_1 );
circle_1.position.set( -15, 15, 0 );
circle_1.castShadow = true;
scene.add( circle_1 );

// круг № 2

const geometry_2 = new THREE.CircleGeometry( 5, 32 ); 
const material_2 = new THREE.MeshLambertMaterial( { 
    color: 0xffffff
 } ); 
const circle_2 = new THREE.Mesh( geometry_2, material_2 );
circle_2.position.set( -5, 15, 0 );
circle_2.castShadow = true;
scene.add( circle_2 );

// круг № 3

const geometry_3 = new THREE.CircleGeometry( 5, 32 ); 
const material_3 = new THREE.MeshPhongMaterial( { 
    color: 0xffffff
 } ); 
const circle_3 = new THREE.Mesh( geometry_3, material_3 ); 
circle_3.position.set( 5, 15, 0 );
circle_3.castShadow = true;
scene.add( circle_3 );

// круг № 4

const geometry_4 = new THREE.CircleGeometry( 5, 32 ); 
const material_4 = new THREE.MeshPhongMaterial( { 
    color: 0xffffff,
    shininess: 0
 } ); 
const circle_4 = new THREE.Mesh( geometry_4, material_4 ); 
circle_4.position.set( 15, 15, 0 );
circle_4.castShadow = true;
scene.add( circle_4 );

// круг № 5

const geometry_5 = new THREE.CircleGeometry( 5, 32 ); 
const material_5 = new THREE.MeshPhongMaterial( { 
    color: 0xffffff,
    shininess: 30
 } ); 
const circle_5 = new THREE.Mesh( geometry_5, material_5 );
circle_5.position.set( -15, 5, 0 );
circle_5.castShadow = true;
scene.add( circle_5 );

// круг № 6

const geometry_6 = new THREE.CircleGeometry( 5, 32 ); 
const material_6 = new THREE.MeshPhongMaterial( { 
    color: 0xffffff,
    shininess: 150
 } ); 
const circle_6 = new THREE.Mesh( geometry_6, material_6 ); 
circle_6.position.set( -5, 5, 0 );
circle_6.castShadow = true;
scene.add( circle_6 );

// круг № 7

const geometry_7 = new THREE.CircleGeometry( 5, 32 ); 
const material_7 = new THREE.MeshBasicMaterial( { 
    color: 0xffffff,
    roughness: 0,
    metalness: 0
 } ); 
const circle_7 = new THREE.Mesh( geometry_7, material_7 ); 
circle_7.position.set( 5, 5, 0 );
circle_7.castShadow = true;
scene.add( circle_7 );

// круг № 8

const geometry_8 = new THREE.CircleGeometry( 5, 32 ); 
const material_8 = new THREE.MeshBasicMaterial( { 
    color: 0xffffff,
    roughness: 0.5,
    metalness: 0.5
 } ); 
const circle_8 = new THREE.Mesh( geometry_8, material_8 );
circle_8.position.set( 15, 5, 0 );
circle_8.castShadow = true;
scene.add( circle_8 );

// круг № 9

const geometry_9 = new THREE.CircleGeometry( 5, 32 ); 
const material_9 = new THREE.MeshBasicMaterial( { 
    color: 0xffffff,
    roughness: 1,
    metalness: 1
 } ); 
const circle_9 = new THREE.Mesh( geometry_9, material_9 );
circle_9.position.set( -15, -5, 0 );
circle_9.castShadow = true;
scene.add( circle_9 );


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