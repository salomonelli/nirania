/**
 * Created by sarasteiert on 05/08/16.
 */
function Scene(width, height){
    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.zIndex = 1000;
    this.yIndex = 100;
    this.windowHalfX = width/2;
    this.windowHalfY = height/2;
    this.width = width;
    this.height = height;
    this.objects= {
        particles: null,
        protagonist: null
    };
    this.init();
}

Scene.prototype.init = function(){
    //set camera
    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3000);
    this.camera.position.z = this.zIndex;
    this.camera.position.y = this.yIndex;

    //create scene
    this.scene = new THREE.Scene();

    //add objects to scene
    this.objects.particles = new Particles(this.scene);
    this.objects.protagonist = new Protagonist(this.scene);

    //var leg = new Leg();
    //scene.add(leg.leg);



    //TODO create way
    var way = new THREE.Mesh(
        new THREE.CubeGeometry(300, 100, 2000),
        new THREE.MeshBasicMaterial({color: COLOR.way, wireframe: false})
    );
    way.position.z = 0;//0;
    way.position.y = -this.windowHalfY;
    //this.scene.add(way);

    this.renderer = new THREE.WebGLRenderer({alpha: true});//new THREE.CanvasRenderer();
    //renderer.setClearColor(COLOR.background); //3A3D7A);
    //this.renderer = new THREE.CanvasRenderer( { alpha: true }); // gradient

    //renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    document.body.appendChild(this.renderer.domElement);
};


Scene.prototype.render = function(){
    this.camera.lookAt(this.scene.position);
    this.objects.particles.animate();
    this.renderer.render(this.scene, this.camera);
};