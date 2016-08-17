module.exports = (function (Head, Body, Leg, COLOR, $, THREE, TWEEN) {

    /**
     * Represents Protagonist
     * @constructor
     */
    function Protagonist() {
        //create an empty container
        this.group = new THREE.Object3D();
        this.body = new Body();
        this.head = new Head();
        this.left = {
            leg: new Leg()
        };
        this.right = {
            leg: new Leg()
        };
        this.groupBodyParts();

        this.group.castShadow = true;
        this.group.scale.x = this.group.scale.y = this.group.scale.z = 10;

        this.isJumping = false;
    }

    /**
     * groups the body parts of protagonist and positions them
     */
    Protagonist.prototype.groupBodyParts = function () {
        this.body.position(0, 0, 0);
        this.body.addToGroup(this.group);
        this.head.position(0, 0.1, 0);
        this.head.addToGroup(this.group);
        this.right.leg.position(0.5, 0, 0);
        this.right.leg.addToGroup(this.group);
        this.left.leg.position(0, 0, 0);
        this.left.leg.addToGroup(this.group);
    };

    /**
     * Makes protagonist jump a given height
     */
    Protagonist.prototype.jump = function () {
        var self = this;
        if (!self.isJumping) {
            self.isJumping = true;
            var tween = new TWEEN
                .Tween({jump: 0})
                .to({jump: Math.PI}, 500)
                .onUpdate(function () {
                    self.group.position.y = 40 * Math.sin(this.jump);
                })
                .start();
            tween.onComplete(function () {
                self.isJumping = false;
            });
        }
    };

    /**
     * positions protagonist according to given coordinates
     * @param {number} x - x position of particles group
     * @param {number} y - y position of particles group
     * @param {number} z - z position of particles group
     */
    Protagonist.prototype.position = function (x, y, z) {
        this.group.position.set(x, y, z);
    };

    /**
     * rotates the protagonist according to axis and angle
     * @param {string} axis - "x", "y" or "z"
     * @param {number} angle - in radians
     */
    Protagonist.prototype.rotate = function (axis, angle) {
        switch (axis) {
            case 'x':
                this.group.rotateX(angle);
                break;
            case 'y':
                this.group.rotateY(angle);
                break;
            case 'z':
                this.group.rotateZ(angle);
                break;
        }
    };

    /**
     * adds protagonist to given scene
     * @param {THREE.Scene} scene - scene to which the protagonist will be added
     */
    Protagonist.prototype.addToScene = function (scene) {
        scene.add(this.group);
    };

    /**
     * returns the current position of the Protagonist
     * @returns {Object}
     */
    Protagonist.prototype.getPosition = function () {
        return this.group.position;
    };

    /**
     * decreases the position of the protagonist according to given axis
     * @param {string} axis - "x", "y" or "z"
     */
    Protagonist.prototype.decreasePosition = function (axis) {
        switch (axis) {
            case "x":
                this.group.position.x--;
                break;
            case "y":
                this.group.position.y--;
                break;
            case "z":
                this.group.position.z--;
                break;
        }
    };

    /**
     * returns the group of meshes of the protagonist
     * @returns {THREE.Object3D}
     */
    Protagonist.prototype.returnGroup = function () {
        return this.group;
    };


    Protagonist.prototype.animate = function () {
        //TODO let dress move slightly
    };

    /**
     * loads blender files for protagonist
     * @param {function} cb
     */
    Protagonist.init = (function (cb) {
        var initUs = [
            Leg,
            Body,
            Head
        ];
        var initCount = initUs.length;
        initUs.forEach(function (initMe) {
            initMe.init(function () {
                initCount--;
                if (initCount === 0) {
                    cb();
                }
            });
        });
    });

    return Protagonist;
})(
    require('./Head'),
    require('./Body'),
    require('./Leg'),
    require('../COLOR'),
    require('jquery'),
    require('three'),
    require('tween.js')
);