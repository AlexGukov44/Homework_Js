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

// плоскость 

const planeGeometry = new THREE.PlaneGeometry( 10, 10 );
const planeMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1.5;
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

// аудио 

const listener = new THREE.AudioListener();
camera.add( listener );
const sound = new THREE.PositionalAudio( listener );
const audioLoader = new THREE.AudioLoader();

let isPlaying = false;

// кнопка для запуска рендера и аудио 

const playButton = document.createElement('button');
playButton.textContent = 'play';
playButton.style.position = 'absolute';
playButton.style.top = '10px';
playButton.style.left = '10px';
playButton.style.zIndex = '1000';
document.body.appendChild(playButton);

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        sound.play();
        animate();
        playButton.textContent = 'playing...';
    }
});

audioLoader.load( 'https://cdn.freesound.org/previews/788/788539_1648170-lq.ogg', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 1 );
});

// фигура 

const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshStandardMaterial( { 
    color: 0xff0000,
    metalnes: 0.5,
    roughness: 0.5,
    side: THREE.DoubleSide
} );
const mesh = new THREE.Mesh( geometry, material ) ;
mesh.scale.set(0.05, 0.05, 0.05);
mesh.castShadow = true;
scene.add( mesh );


function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.01;

    const angle = Date.now() * 0.001;
    const radius = 8; 
    camera.position.x = Math.cos(angle) * radius;
    camera.position.y = 3;
    camera.position.z = Math.sin(angle) * radius;
    camera.lookAt(mesh.position); // ставим камеру по центру 

    renderer.render(scene, camera);
};

