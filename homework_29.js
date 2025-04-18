// сцена 

const scene = new THREE.Scene();

//  камера 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 5, 50);

//  рендер

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// сфера

const geometrySphere = new THREE.SphereGeometry( 5, 32, 32 ); 
const materialSphere = new THREE.MeshStandardMaterial( { color: 0xffffff, wireframe: true} ); 
const sphere = new THREE.Mesh( geometrySphere, materialSphere ); 
sphere.position.set( 0, 15, 0);
scene.add( sphere );

// цилиндр

const geometryCylinder = new THREE.CylinderGeometry( 5, 5, 15, 10 ); 
const materialCylinder = new THREE.MeshStandardMaterial( {color: 0x0000ff} ); 
const cylinder = new THREE.Mesh( geometryCylinder, materialCylinder ); 
cylinder.position.set(0, 0, 0);
scene.add( cylinder );

// куб

const geometryBox = new THREE.BoxGeometry( 10, 10, 10 ); 
const materialBox = new THREE.MeshStandardMaterial( {color: 0xff0000} ); 
const cube = new THREE.Mesh( geometryBox, materialBox ); 
cube.position.set(0, -15, 0);
scene.add( cube );

// плоскость 

const planeGeometry = new THREE.PlaneGeometry( 50, 50 );
const planeMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = -Math.PI / 2;
plane.position.y = -30;
plane.receiveShadow = true;
scene.add( plane );

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
    // добавил динамики            для закрепления материала 

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    const angle = Date.now() * 0.001;
    const radius = 60; 
    camera.position.x = Math.cos(angle) * radius;
    camera.position.y = 3;
    camera.position.z = Math.sin(angle) * radius;
    camera.lookAt(cylinder.position); // ставим камеру по центру 

    renderer.render(scene, camera);
};

animate();