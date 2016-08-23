module.exports = (function (Particles, Protagonist, COLOR, THREE, async, TWEEN, Cookies) {

    /**
     * Represents Scene
     * @param {number} width - width of browser window
     * @param {number} height - height of browser window
     * @constructor
     */
    function Scene(width, height, background) {
        this.width = width;
        this.height = height;
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3000);
        this.scene = new THREE.Scene();
        this.powerupUsed = false;
        this.renderer = new THREE.WebGLRenderer();
        this.scene.background = new THREE.Color( background);
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = false;
        this.boostNotUsed = true;
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
            up: false,
            continue: false,
            powerup: false
        };
        this.addLights();
    }

    /**
     * adds lights to scene
     */
    Scene.prototype.addLights = function () {
        this.lights.hemisphere = new THREE.HemisphereLight(0xd3edec, COLOR.way, 0.8);//0x53034A, COLOR.way, 0.8)

        this.lights.shadow = new THREE.DirectionalLight(0xffffff, 0.005);//0xffffff, 1);
        this.lights.shadow.position.set(0, 200, 0);
        this.lights.shadow.position.copy(this.camera.position);
        this.lights.shadow.position.y += 1000;
        this.lights.shadow.target.position.set(0, 0, 0);
        this.lights.shadow.castShadow = true;

        //visible area of the projected shadow
        this.lights.shadow.shadow.camera.left = -1000;
        this.lights.shadow.shadow.camera.right = 1000;
        this.lights.shadow.shadow.camera.top = 1000;
        this.lights.shadow.shadow.camera.bottom = -1000;
        this.lights.shadow.shadow.camera.near = 1;
        this.lights.shadow.shadow.camera.far = 2000;

        //resolution
        this.lights.shadow.shadow.mapSize.width = 2048;
        this.lights.shadow.shadow.mapSize.height = 2048;
        //this.lights.shadow.shadowDarkness = 0.1;
        this.scene.add(this.lights.hemisphere);
        this.scene.add(this.lights.shadow);
        this.scene.add( new THREE.AmbientLight( 0xffffff, 0.3 ) );
    };

    /**
     * positions and creates intro view
     */
    Scene.prototype.showIntro = function () {
        this.camera.position.set(250, 1000, 50);

        //add particles
        this.objects.particles.position(0, 0, -500);
        this.objects.particles.addToScene(this.scene);

        //add particles for intro
        this.objects.introParticles.position(0, 0, 250);
        this.objects.introParticles.addToScene(this.scene);

        //add protagonist
        this.objects.protagonist.position(0, 950, 0);
        this.objects.protagonist.rotate('y', Math.PI);
        this.objects.protagonist.addToScene(this.scene);

        this.camera.lookAt(this.objects.protagonist.getPosition());
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
     * creates the animation for starting the game
     * @param {function} cb - callback function
     */
    Scene.prototype.startingAnimation = function (cb) {
        var self = this;
        //protagonist and cube fall
        async.series([
            function animation1(next) {
                var t = 150;
                var fall = function () {
                    self.objects.protagonist.decreasePosition('y');
                    t--;
                    if (t > 0) {
                        setTimeout(function () {
                            fall();
                        }, 1);
                    } else {
                        next();
                    }
                };
                fall();
            },
            function animation2(next) {
                var t = 800;
                var fall = function () {
                    self.objects.protagonist.decreasePosition('y');
                    self.camera.position.y--;
                    t--;
                    if (t > 0) {
                        setTimeout(function () {
                            fall();
                        }, 1);
                    } else {
                        next();
                    }
                };
                fall();
            },
            function animation3(next) {
                var t = 150;
                var fall = function () {
                    self.camera.position.y--;
                    t--;
                    if (t > 0) {
                        setTimeout(function () {
                            fall();
                        }, 1);
                    } else {
                        self.camera.lookAt(self.objects.protagonist.getPosition());
                        next();
                    }
                };
                fall();
            },
            function animation4(next) {
                var t = 250;
                var fall = function () {
                    self.camera.position.x--;
                    self.camera.position.z += 0.5;
                    self.camera.lookAt(self.objects.protagonist.getPosition());
                    t--;
                    if (t > 0) {
                        setTimeout(function () {
                            fall();
                        }, 1);
                    } else {
                        self.camera.lookAt(self.objects.protagonist.getPosition());
                        next();
                    }
                };
                fall();
            },
            function animation5(next) {
                var t = 80;
                var zoom = function () {
                    self.camera.position.z--;
                    self.camera.lookAt(self.objects.protagonist.getPosition());
                    t--;
                    if (t > 0) {
                        setTimeout(function () {
                            zoom();
                        }, 1);
                    } else {
                        self.camera.lookAt(self.objects.protagonist.getPosition());
                        next();
                    }
                };
                zoom();
            },
            function endAnimation() {
                self.objects.introParticles.removeFromScene(self.scene);
                cb();
            }
        ]);
    };

    /**
     * adds current level objects to scene
     * @param {Level} level - current level
     */
    Scene.prototype.addLevel = function (level) {
        this.objects.way = level.way;
        this.objects.way.addToScene(this.scene);
    };

    Scene.prototype.boost = function (mainProtagonist, level) {
        var self = this;
        if (Cookies.get('powerup-4') == "bought"){
        if(self.move.powerup){
            if(self.boostNotUsed) {
                level.powerupActiveDuration = self.objects.way.currentPosition.distance + 750;
                level.powerupActive = true;
                console.log(level.powerupActiveDuration);
                console.log(level.powerupActive);
                self.boostNotUsed = false;
            }
        }
    }

    }
    /**
     * turns camera and protagonist until told to stop
     */
    Scene.prototype.turn = function () {
        var self = this;
        if (self.move.continue) {
            if (self.move.left) {
                self.objects.way.rotate(-Math.PI * 0.01);
                self.objects.particles.rotate(-Math.PI * 0.01);
            }
            if (self.move.right) {
                self.objects.way.rotate(Math.PI * 0.01);
                self.objects.particles.rotate(Math.PI * 0.01);
            }
            if (self.move.up) {
                self.objects.protagonist.jump();
            }
        }
    };

    /**
     * returns the THREE group of the protagonist
     * @returns {THREE.Object3D} group of protagonist
     */
    Scene.prototype.getProtagonist = function () {
        return this.objects.protagonist.returnGroup();
    };

    /**
     * sets camera to the right position
     */
    Scene.prototype.simpleIntro = function () {
        this.camera.position.set(0, 50, 95);

        //add particles
        this.objects.particles.position(0, 0, -500);
        this.objects.particles.addToScene(this.scene);

        //add protagonist
        this.objects.protagonist.position(0, 5, 0);
        this.objects.protagonist.rotate('y', Math.PI);
        this.objects.protagonist.addToScene(this.scene);

        this.camera.lookAt(this.objects.protagonist.getPosition());
    };

    /**
     * disables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - "left" or "right"
     */
    Scene.stopMovingProtagonist = function (scene, direction) {
        scene.move[direction] = false;
    };

    /**
     * enables turning in the given direction
     * @param {Scene} scene
     * @param {string} direction - "left" or "right"
     */
    Scene.startMovingProtagonist = function (scene, direction) {
        scene.move[direction] = true;
    };

    return Scene;
})(
    require('./Particles'),
    require('./protagonist/Protagonist'),
    require('./COLOR'),
    require('three'),
    require('async'),
    require('tween.js'),
    require('js-cookie')
);
