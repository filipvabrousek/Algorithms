// START 04/04/20 - 18:16
	
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
	
//document.querySelector("#render").innerHTML = renderer.domElement;
document.body.appendChild(renderer.domElement);
	
var g = new THREE.BoxGeometry();
var m = new THREE.MeshBasicMaterial({color: 0x3498db});

var cube = new THREE.Mesh(g, m);
scene.add(cube);

camera.position.z = 5;


function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.02;
}

animate();