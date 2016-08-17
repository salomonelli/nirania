module.exports = (function (Head, Body, Leg, COLOR, $, THREE, TWEEN) {

    /**
     * Represents Protagonist
     * @constructor
     */
    function Protagonist() {
        //create an empty container
        this.group = new THREE.Object3D();

        //add body to group
        this.body = new Body();
        this.body.mesh.position.set(0, 0, 0);
        this.group.add(this.body.mesh);

        //add head to group
        this.head = new Head();
        this.head.mesh.position.set(0, 0.1, 0);
        this.group.add(this.head.mesh);

        this.left = {
            leg: new Leg(),
            arm: null
        };
        this.right = {
            leg: new Leg(),
            arm: null
        };
        //add right leg to group
        this.right.leg.mesh.position.set(0.5, 0, 0);
        this.group.add(this.right.leg.mesh);
        //add left leg to group
        this.left.leg.mesh.position.set(0, 0, 0);
        this.group.add(this.left.leg.mesh);

        this.group.castShadow = true;
        this.group.scale.x = this.group.scale.y = this.group.scale.z = 10;

        this.isJumping = false;
    }

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

    Protagonist.prototype.animate = function () {
        //TODO let dress move slightly
    }

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