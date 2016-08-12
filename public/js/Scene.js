module.exports = (function(Particles, Protagonist, COLOR, Wall, THREE){
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
        this.lights = {
            hemisphere: null,
            shadow: null
        };
        this.status = 'intro';
        this.init();
    }

    Scene.prototype.init = function(){
        //set camera
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3000);

        //create mainScene
        this.scene = new THREE.Scene();

        //add lights to scene
        this.addLights();

        //add objects to mainScene
        this.objects.particles = new Particles(this.scene);



        //TODO create way
        var way = new THREE.Mesh(
            new THREE.CubeGeometry(300, 100, 2000),
            new THREE.MeshLambertMaterial({color: COLOR.way})
        );
        way.position.z = 0;//0;
        way.position.y = -50;//-this.windowHalfY;
        console.log(way.receiveShadow);
        way.receiveShadow = true;
        Wall.prototype.createWall();

        this.scene.add(way);
        //this.scene.add(activeWall[activeWall.length - 1]);


        this.renderer = new THREE.WebGLRenderer({alpha: true});
        this.renderer.setSize(this.width, this.height);

        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = false;

        //this.scene.add(new THREE.Fog( 0xffffff, 1000, 0 ));

        // controls
        controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
        document.body.appendChild(this.renderer.domElement);
    };

    Scene.prototype.intro = function(){
        this.camera.position.z = 850;
        this.camera.position.y = 1000;
        this.camera.position.x = 250;

        this.objects.protagonist = new Protagonist(this.scene);
        this.objects.protagonist.group.position.set(0,950,800);
        this.objects.protagonist.group.rotateY(Math.PI);
        this.scene.add(this.objects.protagonist.group);

        //add cube
        this.objects.wayHelper = new THREE.Mesh(
            new THREE.CubeGeometry(25 , 25, 25),
            new THREE.MeshLambertMaterial({color: COLOR.way})
        );
        this.objects.wayHelper.position.set(0,915,802);
        this.scene.add(this.objects.wayHelper);
        this.camera.lookAt(this.objects.protagonist.group.position);
    };

    Scene.prototype.startGame = function(){
        //protagonist and cube fall
        console.log('fall');
        var self = this;
        var t = 215;
        var fallOne = function(){
            self.objects.wayHelper.position.y--;
            self.objects.protagonist.group.position.y--;
            t--;
            if(t > 0){
                setTimeout(function(){
                    fallOne();
                }, 10);
            }
        };
        fallOne();
        //this.camera.position.z = this.zIndex;
        //this.camera.position.y = this.yIndex;
    };


    Scene.prototype.addLights = function(){

        // A hemisphere light is a gradient colored light;
        // the first parameter is the sky color, the second parameter is the ground color,
        // the third parameter is the intensity of the light
        this.lights.hemisphere = new THREE.HemisphereLight(0xA73B63, COLOR.way, 0.8);//0x53034A, COLOR.way, 0.8)

        // A directional light shines from a specific direction.
        // It acts like the sun, that means that all the rays produced are parallel.
        this.lights.shadow = new THREE.DirectionalLight(0xffffff, .9);//0xffffff, 1);


        // Set the direction of the light
        this.lights.shadow.position.set(0, 200, 0);

        this.lights.shadow.position.copy(this.camera.position);
        this.lights.shadow.position.y  += 1000;
        //this.lights.shadow.position.z = 0;
        //this.lights.shadow.position.x = 1000;
        this.lights.shadow.target.position.set(0,0,0);
        // Allow shadow casting
        this.lights.shadow.castShadow = true;

        // define the visible area of the projected shadow
        this.lights.shadow.shadow.camera.left = -4000;
        this.lights.shadow.shadow.camera.right = 4000;
        this.lights.shadow.shadow.camera.top = 4000;
        this.lights.shadow.shadow.camera.bottom = -4000;
        this.lights.shadow.shadow.camera.near = 1;
        this.lights.shadow.shadow.camera.far =4000;

        // define the resolution of the shadow; the higher the better,
        // but also the more expensive and less performant
        this.lights.shadow.shadow.mapSize.width = 1000;
        this.lights.shadow.shadow.mapSize.height = 1000;

        // to activate the lights, just add them to the scene
        this.scene.add(this.lights.hemisphere );
        this.scene.add(this.lights.shadow);
        this.scene.add( new THREE.DirectionalLightHelper(this.lights.shadow, 0.2) );

        //light.position.copy( this.camera.position );

    };

    Scene.prototype.addObject = function (givenObject) {
        mainScene.scene.add(givenObject);
    };

    Scene.prototype.removeObject = function (givenObject) {
        mainScene.scene.remove(givenObject);
    };


    Scene.prototype.render = function(){
        //this.camera.lookAt(this.scene.position);
        this.objects.particles.animate();
        this.objects.protagonist.animate();
        this.renderer.render(this.scene, this.camera);
    };

    return Scene;
})(
    require('./Particles'),
    require('./protagonist/Protagonist'),
    require('./COLOR'),
    require('./Wall'),
    require('three')
);