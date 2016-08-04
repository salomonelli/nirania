var camera, scene, renderer, group, particle;

var zIndex = 1000;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var particles = new Particles();


init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.z = zIndex;
    scene = new THREE.Scene();


    particles.init(scene);

		

    renderer = new THREE.CanvasRenderer();
		renderer.setClearColor( 0xFF7864); //3A3D7A);
		//renderer = new THREE.CanvasRenderer( { alpha: true }); // gradient
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
    //group.rotation.x += 0.0001;
    //group.rotation.y += 0.0002;
    particles.animate();
    renderer.render(scene, camera);
}
