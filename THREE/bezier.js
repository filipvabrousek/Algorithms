/*---------------------------RENDERER--------------------------------*/
var r = new THREE.WebGLRenderer();
r.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(r.domElement);
	
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

/*-----------------------------------------------------------*/
var scene = new THREE.Scene();

var curve = new THREE.CubicBezierCurve(
	new THREE.Vector2(-10, 0),
	new THREE.Vector2(-5, 15),
	new THREE.Vector2(20, 15),
	new THREE.Vector2(10, 0)
);

var points = curve.getPoints(50);


var g = new THREE.BufferGeometry().setFromPoints(points);
var m = new THREE.LineBasicMaterial({color: 0xffffff});

var line = new THREE.Line(g, m);
scene.add(line);
r.render(scene, camera);


/*

var points = [
	new THREE.Vector3(-10, 0, 0),
	new THREE.Vector3(0, 10, 0),
	new THREE.Vector3(10, 0, 0),
];

*/

