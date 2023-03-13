import * as THREE from 'https://unpkg.com/three/build/three.module.js';

/* inizializzazione */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas : document.getElementById("home")});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

/* oggetto cubo */
{
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
}
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xD92B3A } );
const cube = new THREE.Mesh( geometry, material );
cube.rotation.set(2.1, 0, 0.8);
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

const mouseTarget = document.getElementById("main");
mouseTarget.addEventListener('mouseleave', onMouseLeave, false);
function onMouseLeave() {
  cube.rotation.set(2.1, 0, 0.8);
}

/*************************************************************/

/* add second object */
/*
const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-5, 0, 0), // primo punto di controllo
    new THREE.Vector3(0, 5, 0), // secondo punto di controllo
    new THREE.Vector3(10, 0, -10) // terzo punto di controllo
);

const material_curve = new THREE.LineBasicMaterial({
    color: 0xffffff,
    linewidth: 2,
});
  
const points = curve.getPoints(50);
const geometry_curve = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry_curve, material_curve);
scene.add(line);

const canvas = document.getElementById("home");
canvas.addEventListener("mousemove", updateLinePosition);

function updateLinePosition(event) {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const point = intersects[0].point;
    curve.v1.set(point.x - 1, point.y + 2, point.z);
    curve.v2.set(point.x + 1, point.y + 2, point.z);
    const points = curve.getPoints(50);
    const geometry = line.geometry;
    geometry.setFromPoints(points);
    geometry.verticesNeedUpdate = true;
  }
}*/

/* adattamento per schermi touch */

var touchPosition = { x: 0, y: 0 };

function onTouchStart(event) {
  touchPosition.x = event.touches[0].pageX;
  touchPosition.y = event.touches[0].pageY;
}

function onTouchMove(event) {
  var dx = event.touches[0].pageX - touchPosition.x;
  var dy = event.touches[0].pageY - touchPosition.y;
  cube.rotation.x += dy * 0.01;
  cube.rotation.y += dx * 0.01;
  touchPosition.x = event.touches[0].pageX;
  touchPosition.y = event.touches[0].pageY;
}

function onTouchEnd(event) {
// non fare niente
}

var canvas = document.getElementById('home');
canvas.addEventListener('touchstart', onTouchStart, false);
canvas.addEventListener('touchmove', onTouchMove, false);
canvas.addEventListener('touchend', onTouchEnd, false);


/* animazione scena */
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();