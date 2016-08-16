module.exports = (function (Particles, Protagonist, COLOR, Wall, THREE, TWEEN, CollisionDetector) {

    /**
     * Represents Scene
     * @param {number} width - width of browser window
     * @param {number} height - height of browser window
     * @constructor
     */
    function Scene(width, height) {
        this.width = width;
        this.height = height;

        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3000);
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({alpha: true});
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMapSoft = false;

        this.objects = {
            particles: new Particles(-600, 600, -600, 600, -300, 0, 100),
            introParticles: new Particles(20, -300, 100, 1300, -500, 0, 30),
            protagonist: new Protagonist()
        };

        this.lights = {
            hemisphere: null,
            shadow: null
        };
        this.move = {
            left: false,
            right: false,
            continue: false
        };
        this.collisionDetector = null;
        this.addLights();

    }

    /**
     * adds lights to scene
     */
    Scene.prototype.addLights = function () {
        this.lights.hemisphere = new THREE.HemisphereLight(0xA73B63, COLOR.way, 0.8);//0x53034A, COLOR.way, 0.8)

        this.lights.shadow = new THREE.DirectionalLight(0xffffff, .9);//0xffffff, 1);
        this.lights.shadow.position.set(0, 200, 0);
        this.lights.shadow.position.copy(this.camera.position);
        this.lights.shadow.position.y += 1000;
        this.lights.shadow.target.position.set(0, 0, 0);
        this.lights.shadow.castShadow = true;

        //visible area of the projected shadow
        this.lights.shadow.shadow.camera.left = -4000;
        this.lights.shadow.shadow.camera.right = 4000;
        this.lights.shadow.shadow.camera.top = 4000;
        this.lights.shadow.shadow.camera.bottom = -4000;
        this.lights.shadow.shadow.camera.near = 1;
        this.lights.shadow.shadow.camera.far = 4000;

        //resolution
        this.lights.shadow.shadow.mapSize.width = 1000;
        this.lights.shadow.shadow.mapSize.height = 1000;

        this.scene.add(this.lights.hemisphere);
        this.scene.add(this.lights.shadow);
    };

    /**
     * positions and creates intro view
     */
    Scene.prototype.showIntro = function () {
        this.camera.position.z = 50;
        this.camera.position.y = 1000;
        this.camera.position.x = 250;

        //add particles
        this.objects.particles.group.position.set(0, 0, -500);
        this.scene.add(this.objects.particles.group);

        //add particles for intro
        this.objects.introParticles.group.position.set(0, 0, 250);
        this.scene.add(this.objects.introParticles.group);

        //add protagonist
        this.objects.protagonist.group.position.set(0, 950, 0);
        this.objects.protagonist.group.rotateY(Math.PI);
        this.scene.add(this.objects.protagonist.group);

        this.camera.lookAt(this.objects.protagonist.group.position);
    };

    /**
     * Renders scene and starts basic animations like particles
     */
    Scene.prototype.render = function () {
        this.objects.particles.animate();
        this.objects.protagonist.animate();
        this.renderer.render(this.scene, this.camera);
    };

    /**
     * starting animation part 1 (protagonist and cube fall)
     * @param {function} cb - callback function
     */
    Scene.prototype.startingAnimation1 = function (cb) {
        var self = this;
        var t = 150;
        var fall = function () {
            //self.objects.wayHelper.position.y--;
            self.objects.protagonist.group.position.y--;
            t--;
            if (t > 0) {
                setTimeout(function () {
                    fall();
                }, 1);
            } else {
                cb();
            }
        };
        fall();
    };

    /**
     * starting animation part 2 (protagonist, cube and camera fall)
     * @param {function} cb - callback function
     */
    Scene.prototype.startingAnimation2 = function (cb) {
        var self = this;
        var t = 800;
        var fall = function () {
            //self.objects.wayHelper.position.y--;
            self.objects.protagonist.group.position.y--;
            self.camera.position.y--;
            t--;
            if (t > 0) {
                setTimeout(function () {
                    fall();
                }, 1);
            } else {
                cb();
            }
        };
        fall();
    };

    /**
     * starting animation part 3 (camera falls to needed height)
     * @param {function} cb - callback function
     */
    Scene.prototype.startingAnimation3 = function (cb) {
        var self = this;
        var t = 150;
        var fall = function () {
            self.camera.position.y--;
            t--;
            if (t > 0) {
                setTimeout(function () {
                    fall();
                }, 1);
            } else {
                self.camera.lookAt(self.objects.protagonist.group.position);
                cb();
            }
        };
        fall();
    };

    /**
     * starting animation part 4 (camera rotates to x position = 0)
     * @param {function} cb - callback function
     */
    Scene.prototype.startingAnimation4 = function (cb) {
        var self = this;
        var t = 250;
        var fall = function () {
            self.camera.position.x--;
            self.camera.position.z += 0.5;
            self.camera.lookAt(self.objects.protagonist.group.position);
            t--;
            if (t > 0) {
                setTimeout(function () {
                    fall();
                }, 1);
            } else {
                self.camera.lookAt(self.objects.protagonist.group.position);
                cb();
            }
        };
        fall();
    };

    /**
     * starting animation part 5 (zooms into protagonist)
     * @param {function} cb - callback function
     */
    Scene.prototype.startingAnimation5 = function (cb) {
        var self = this;
        var t = 80;
        var zoom = function () {
            self.camera.position.z--;
            self.camera.lookAt(self.objects.protagonist.group.position);
            t--;
            if (t > 0) {
                setTimeout(function () {
                    zoom();
                }, 1);
            } else {
                self.camera.lookAt(self.objects.protagonist.group.position);
                cb();
            }
        };
        zoom();
    };

    /**
     * creates the animation for starting the game
     * @param {function} cb - callback function
     */
    Scene.prototype.startingAnimation = function (cb) {
        var self = this;
        //protagonist and cube fall
        self.startingAnimation1(function () {
            //protagonist, cube and camera fall
            self.startingAnimation2(function () {
                //camera falls to needed height
                self.startingAnimation3(function () {
                    //rotate around the protagonist
                    self.startingAnimation4(function () {
                        //zoom in
                        self.startingAnimation5(function () {
                            self.scene.remove(self.objects.introParticles);
                            cb();
                        });
                    });
                });
            });
        });
    };

    /**
     * adds current level objects to scene
     * @param {Level} level - current level
     */
    Scene.prototype.addLevel = function (level) {
        this.objects.way = level.way;
        this.scene.add(level.way.group);
    };

    /**
     * turns camera and protagonist until told to stop
     */
    Scene.prototype.turn = function () {
        var self = this;
        if(self.move.continue){
            if (self.move.left) {
                self.objects.way.rotate(-Math.PI * 0.01);
                self.objects.particles.rotate(-Math.PI * 0.01);
            }
            if (self.move.right) {
                self.objects.way.rotate(Math.PI * 0.01);
                self.objects.particles.rotate(Math.PI * 0.01);
            }
        }

    };

    Scene.prototype.addCollisionDetector = function(obstacles){
        this.collisionDetector = new CollisionDetector(this.objects.protagonist.mesh, obstacles, this.scene);
    };

    Scene.prototype.startCollisionDetection = function(){
        this.collisionDetector.detectCollision();
    }

    /**
     * disables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - "left" or "right"
     */
    Scene.stopTurning = function(scene, direction){
        scene.move[direction]= false;
    };

    /**
     * enables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - "left" or "right"
     */
    Scene.startTurning = function(scene, direction){
        scene.move[direction]= true;
    };

    return Scene;
})(
    require('./Particles'),
    require('./protagonist/Protagonist'),
    require('./COLOR'),
    require('./Wall'),
    require('three'),
    require('tween.js'),
    require('./protagonist/CollisionDetector')
);