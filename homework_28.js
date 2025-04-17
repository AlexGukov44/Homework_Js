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
const materialSphere = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true} ); 
const sphere = new THREE.Mesh( geometrySphere, materialSphere ); 
sphere.position.set( 0, 15, 0);
scene.add( sphere );

// цилиндр

const geometryCylinder = new THREE.CylinderGeometry( 5, 5, 15, 10 ); 
const materialCylinder = new THREE.MeshBasicMaterial( {color: 0x0000ff, wireframe: true} ); 
const cylinder = new THREE.Mesh( geometryCylinder, materialCylinder ); 
cylinder.position.set(0, 0, 0);
scene.add( cylinder );

// куб

const geometryBox = new THREE.BoxGeometry( 10, 10, 10 ); 
const materialBox = new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: true} ); 
const cube = new THREE.Mesh( geometryBox, materialBox ); 
cube.position.set(0, -15, 0);
scene.add( cube );


function animate() {
    requestAnimationFrame(animate);
    // добавил динамики            для закрепления материала 

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();