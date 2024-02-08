
var canvas = document.getElementById('background');
var heightRatio = 1.5;
canvas.height = canvas.width * heightRatio;

/* variabili */
var loader = new THREE.GLTFLoader();

/* inizializzazione */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas : document.getElementById("background")});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x202E2C); //sfondo
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

const raycaster = new THREE.Raycaster();

/* oggetto cubo */
class Cube {
  constructor(position, rotation, scale, color) {
      this.geometry = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshPhongMaterial({ color: color });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.position.copy(position);
      this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
      this.mesh.scale.set(scale.x, scale.y, scale.z);
  }

  // Aggiungi il cubo alla scena specificata
  addToScene(scene) {
      scene.add(this.mesh);
  }

  // Rotazione del cubo in base ai valori specificati
  rotate(x, y, z) {
      this.mesh.rotation.set(x, y, z);
  }

  // Ridimensiona il cubo in base ai valori specificati
  scale(scale) {
      this.mesh.scale.set(scale.x, scale.y, scale.z);
  }

  rotateOnDeviceMove() {
    var tween = new TWEEN.Tween(this.mesh.rotation)
      .to({y: this.mesh.rotation.y + Math.PI}, 1000)
      .start();

    function update() {
      requestAnimationFrame(update);
      TWEEN.update();
    }
    update();
  }
}


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

// Creazione di un nuovo cubo
const cube1 = new Cube(
  new THREE.Vector3(4, 2, -10), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube2 = new Cube(
  new THREE.Vector3(-4, 4, -9), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube3 = new Cube(
  new THREE.Vector3(-4, -2, -5), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube4 = new Cube(
  new THREE.Vector3(6, -4, -6), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube5 = new Cube(
  new THREE.Vector3(4, 3, -4), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube6 = new Cube(
  new THREE.Vector3(4.5, -1.5, -15), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube7 = new Cube(
  new THREE.Vector3(4, -3, -7), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube8 = new Cube(
  new THREE.Vector3(10, 0, -13), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube9 = new Cube(
  new THREE.Vector3(-6, -1, -17), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube10 = new Cube(
  new THREE.Vector3(-5, 0, -4), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube11 = new Cube(
  new THREE.Vector3(-6, 3, -7), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);
const cube12 = new Cube(
  new THREE.Vector3(-10, -5, -12), // Posizione
  new THREE.Vector3(2.1, 0, 0.8), // Rotazione
  new THREE.Vector3(1, 1, 1), // Scala
  0xD92B3A                   // Colore
);

cube1.addToScene(scene);
cube2.addToScene(scene);
cube3.addToScene(scene);
cube4.addToScene(scene);
cube5.addToScene(scene);
cube6.addToScene(scene);
cube7.addToScene(scene);
cube8.addToScene(scene);
cube9.addToScene(scene);
cube10.addToScene(scene);
cube11.addToScene(scene);
cube12.addToScene(scene);

/* comportamento cubo */
function onMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const rotationX = (mouseY / window.innerHeight) * Math.PI - Math.PI / 2;
    const rotationY = (mouseX / window.innerWidth) * Math.PI - Math.PI / 2;

    cube.rotation.set(rotationX, rotationY, 0);
    cube1.rotate(rotationX, rotationY, 0);
    cube2.rotate(rotationX, rotationY, 0);
    cube3.rotate(rotationX, rotationY, 0);
    cube4.rotate(rotationX, rotationY, 0);
    cube5.rotate(rotationX, rotationY, 0);
    cube6.rotate(rotationX, rotationY, 0);
    cube7.rotate(rotationX, rotationY, 0);
    cube8.rotate(rotationX, rotationY, 0);
    cube9.rotate(rotationX, rotationY, 0);
    cube10.rotate(rotationX, rotationY, 0);
    cube11.rotate(rotationX, rotationY, 0);
    cube12.rotate(rotationX, rotationY, 0);
}
  
document.addEventListener('mousemove', onMouseMove, false);  

function onDeviceMove() {

  var tween = new TWEEN.Tween(cube.rotation.set(2.1, 0, 0.8))
    .to({x: cube.rotation.x + Math.PI }, 1000)
    .start();

  function update() {
    requestAnimationFrame(update);
    TWEEN.update();
  }
  update();
}

if(window.innerWidth < 600){
  setInterval(onDeviceMove, 1000);

  setInterval(() => {
      cube1.rotateOnDeviceMove();
      cube2.rotateOnDeviceMove();
      cube3.rotateOnDeviceMove();
      cube4.rotateOnDeviceMove();
      cube5.rotateOnDeviceMove();
      cube6.rotateOnDeviceMove();
      cube7.rotateOnDeviceMove();
      cube8.rotateOnDeviceMove();
      cube9.rotateOnDeviceMove();
      cube10.rotateOnDeviceMove();
    }, 1000)
}

/* animazione scena */
function animate() {
	requestAnimationFrame( animate );
  TWEEN.update();
	renderer.render( scene, camera );
}
animate();