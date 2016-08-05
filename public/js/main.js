/*
var camera, scene, renderer;
var zIndex = 1000;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var particles, protagonist;



init();
animate();
 */

var scene = new Scene(window.innerWidth, window.innerHeight);
animate();

function animate(){
    requestAnimationFrame(animate);
    scene.render();
}
/*
function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.z = zIndex;
    scene = new THREE.Scene();

    particles = new Particles(scene);
    protagonist = new Protagonist(scene);


    //added

    var way = new THREE.Mesh(
        new THREE.CubeGeometry(300, 100, 1000),
        new THREE.MeshBasicMaterial({color: COLOR.way, wireframe: false})
    );
    way.position.z = 0;
    way.position.y = -windowHalfY;
    scene.add(way);
    //

    renderer = new THREE.CanvasRenderer();

    //renderer.setClearColor(COLOR.background); //3A3D7A);
    renderer = new THREE.CanvasRenderer( { alpha: true }); // gradient

    //renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}


function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    camera.lookAt(scene.position);
    particles.animate();
    renderer.render(scene, camera);
}
 */

