/* da eliminare */
document.getElementById('tell').addEventListener('click', 
function() {
  alert('coming soon');
});

document.getElementById('try').addEventListener('click', 
function() {
  alert('coming soon');
});

document.getElementById('about').addEventListener('click', 
function() {
  alert('coming soon');
});

/* variabili */
var hiClicked = false;
var loader = new THREE.GLTFLoader();

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
const cubedimension = cube.scale.x;
cube.rotation.set(2.1, 0, 0.8);
scene.add( cube );

/* comportamento cubo */
function onMouseMove(event) {
  if(!hiClicked){
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const rotationX = (mouseY / window.innerHeight) * Math.PI - Math.PI / 2;
    const rotationY = (mouseX / window.innerWidth) * Math.PI - Math.PI / 2;

    cube.rotation.set(rotationX, rotationY, 0);
  }
}
  
document.addEventListener('mousemove', onMouseMove, false);  

const mouseTarget = document.getElementById("main");
mouseTarget.addEventListener('mouseleave', onMouseLeave, false);

function onMouseLeave() {
  var tween = new TWEEN.Tween(cube.rotation.set(2.1, 0, 0.8))
    .to({ y: cube.rotation.y + Math.PI }, 1000)
    .start();

  function update() {
    requestAnimationFrame(update);
    TWEEN.update();
  }
  update();
}

/* adattamento per schermi touch */

var touchPosition = { x: 0, y: 0 };

function onTouchStart(event) {
  touchPosition.x = event.touches[0].pageX;
  touchPosition.y = event.touches[0].pageY;
}

function onTouchMove(event) {
  var dx = event.touches[0].pageX - touchPosition.x;
  var dy = event.touches[0].pageY - touchPosition.y;
  cube.rotation.x += dy / 5 * 0.01;
  cube.rotation.y -= dx / 5 * 0.01;
  touchPosition.x = event.touches[0].pageX;
  touchPosition.y = event.touches[0].pageY;
}

var canvas = document.getElementById('home');
canvas.addEventListener('touchstart', onTouchStart, false);
canvas.addEventListener('touchmove', onTouchMove, false);
canvas.addEventListener('touchend', onMouseLeave, false);


/* animazione scena */
function animate() {
	requestAnimationFrame( animate );
  TWEEN.update();
	renderer.render( scene, camera );
}
animate();

/* after button click */
var eyes = document.getElementById("eyes");

eyes.addEventListener('click', stopOther);

function stopOther(){
  hiClicked = true;
  const rotationTween = new TWEEN.Tween(cube.rotation)
    .to({ y: cube.rotation.y + Math.PI * 2 }, 500)
    .repeat(Infinity);
    rotationTween.start();
const scaleTween = new TWEEN.Tween(cube.scale)
    .to({ x: cubedimension * 0, y: cubedimension * 0, z: cubedimension * 0 }, 1000)
    .onComplete(uploadNew);
    scaleTween.start();
}

function uploadNew(){
  scene.remove(cube);

  document.getElementById("eyes").hidden = true;
  document.getElementById("tell").hidden = true;
  document.getElementById("try").hidden = true;
  document.getElementById("about").hidden = true;

  loader.load(
    '../assets/3D/model.gltf',
    function ( gltf ) {
      gltf.scene.scale.set( 15, 15, 15 );
      scene.add( gltf.scene );
    }, 
    
    function ( xhr ) {
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },

    function ( error ) {
      console.log( 'An error happened' );
    }
  );
}