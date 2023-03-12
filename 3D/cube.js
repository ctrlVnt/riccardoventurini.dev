import * as THREE from 'https://unpkg.com/three/build/three.module.js';

/* inizializzazione */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas : document.getElementById("home")});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

/* background */
/*const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load('DSC_0304.JPG');
scene.background = backgroundTexture;*/

/* oggetto cubo */
{
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
}
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xA6032F } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

/* comportamento cubo */
function onMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const rotationX = (mouseY / window.innerHeight) * Math.PI - Math.PI / 2;
    const rotationY = (mouseX / window.innerWidth) * Math.PI - Math.PI / 2;

    cube.rotation.set(rotationX, rotationY, 0);
}
  
document.addEventListener('mousemove', onMouseMove, false);  

/* NON FUNZIONA */
function onMouseLeave() {
    console.log('mouse left');
    new TWEEN.Tween(object.rotation)
      .to({ x: 0, y: 0, z: 0 }, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
  }

window.addEventListener('mouseleave', onMouseLeave, false); 

/*************************************************************/

/* animazione scena */
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();